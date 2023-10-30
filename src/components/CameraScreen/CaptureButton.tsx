import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {TakePhotoOptions} from 'react-native-vision-camera';

import {CAPTURE_BUTTON_SIZE} from '@utils/constants';

import {CaptureButtonProps} from './CaptureButton.types';

const START_RECORDING_DELAY = 200;
const TAKE_PHOTO_DELAY = 100;
const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

const _CaptureButton = ({
  enabled,
  flash,
  camera,
  onMediaCaptured,
  setIsPressingButton,
  recordingMode,
}: CaptureButtonProps) => {
  const pressDownDate = useRef<Date | undefined>(undefined);
  const [isRecording, setIsRecording] = useState(false);
  const recordingProgress = useSharedValue(0);
  const currentGesture = useSharedValue<string>('none');

  const takePhotoOptions = useMemo<TakePhotoOptions>(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: flash,
      quality: 90,
      enableShutterSound: true,
    }),
    [flash],
  );

  const isPressingButton = useSharedValue(false);

  const tapGesture = Gesture.Tap();

  //#region Camera Capture
  const takePhoto = useCallback(async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }

      const photo = await camera.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo, 'photo');
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [camera, onMediaCaptured, takePhotoOptions]);

  const onStoppedRecording = useCallback(() => {
    setIsRecording(false);
    cancelAnimation(recordingProgress);
  }, [recordingProgress]);

  const stopRecording = useCallback(async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }
      await camera.current.stopRecording();
    } catch (e) {
      console.error('failed to stop recording!', e);
    }
  }, [camera]);

  const startRecording = useCallback(() => {
    try {
      if (camera.current === null) {
        throw new Error('Camera ref is null!');
      }

      camera.current.startRecording({
        flash: flash,
        onRecordingError: error => {
          console.error('Recording failed!', error);
          onStoppedRecording();
        },
        onRecordingFinished: video => {
          onMediaCaptured(video, 'video');
          onStoppedRecording();
        },
      });
      // TODO: wait until startRecording returns to actually find out if the recording has successfully started
      setIsRecording(true);
    } catch (e) {
      console.error('failed to start recording!', e, 'camera');
    }
  }, [camera, flash, onMediaCaptured, onStoppedRecording]);
  //#endregion

  const onTapGestureStrategy = () => {
    switch (recordingMode) {
      case 'photo':
      case 'video':
        return {
          async onTapBegan() {
            isPressingButton.value = true;
            if (recordingMode === 'video') {
              if (!isRecording) {
                startRecording();
                setIsPressingButton(true);
              } else {
                currentGesture.value = 'none';
                await stopRecording();
              }
            } else {
              setTimeout(() => {
                isPressingButton.value = false;
              }, TAKE_PHOTO_DELAY);
              await takePhoto();
            }
          },
          onTapFinalized() {
            setIsPressingButton(false);
          },
        };
      case 'combined':
        return {
          onTapBegan() {
            recordingProgress.value = 0;
            isPressingButton.value = true;
            const now = new Date();
            pressDownDate.current = now;
            const onLongPressDetected = () => {
              if (pressDownDate.current === now) {
                currentGesture.value = 'longPress';
                // user is still pressing down after 200ms, so his intention is to create a video
                startRecording();
              }
            };
            setTimeout(onLongPressDetected, START_RECORDING_DELAY);
            setIsPressingButton(true);
          },
          async onTapFinalized() {
            try {
              if (pressDownDate.current == null) {
                throw new Error('PressDownDate ref .current was null!');
              }
              const now = new Date();
              const diff = now.getTime() - pressDownDate.current.getTime();
              pressDownDate.current = undefined;
              if (diff < START_RECORDING_DELAY) {
                // user has released the button within 200ms, so his intention is to take a single picture.
                await takePhoto();
              } else {
                // user has held the button for more than 200ms, so he has been recording this entire time.
                currentGesture.value = 'none';
                await stopRecording();
              }
            } finally {
              setIsPressingButton(false);
            }
          },
        };
    }
  };

  tapGesture
    .maxDuration(99999999)
    .onBegin(onTapGestureStrategy().onTapBegan)
    .onEnd(() => {
      isPressingButton.value = false;
    })
    .onFinalize(onTapGestureStrategy().onTapFinalized);

  const buttonStyle = useAnimatedStyle(() => {
    let scale: number;
    let bgColor = 'transparent';
    if (enabled) {
      if (isPressingButton.value || isRecording) {
        scale = withRepeat(
          withSpring(1, {
            stiffness: 100,
            damping: 1000,
          }),
          -1,
          true,
        );
        bgColor =
          currentGesture.value === 'longPress' || isRecording
            ? '#FF0000'
            : '#FFFFFF';
      } else {
        scale = withSpring(0.9, {
          stiffness: 500,
          damping: 300,
        });
        bgColor = 'transparent';
      }
    } else {
      scale = withSpring(0.6, {
        stiffness: 500,
        damping: 300,
      });
    }

    return {
      backgroundColor: bgColor,
      opacity: withTiming(enabled ? 1 : 0.3, {
        duration: 100,
        easing: Easing.linear,
      }),
      transform: [
        {
          scale: scale,
        },
      ],
    };
  }, [enabled, isPressingButton, currentGesture, isRecording]);

  return (
    <Animated.View style={[styles.container]}>
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={[styles.circle, buttonStyle]} />
      </GestureDetector>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: CAPTURE_BUTTON_SIZE + CAPTURE_BUTTON_SIZE * 0.5,
  },
  circle: {
    height: CAPTURE_BUTTON_SIZE,
    width: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: 'white',
  },
});
export const CaptureButton = React.memo(_CaptureButton);
