import React, {useCallback, useMemo, useRef} from 'react';
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
const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

const _CaptureButton = ({
  enabled,
  flash,
  camera,
  onMediaCaptured,
  setIsPressingButton,
}: CaptureButtonProps) => {
  const pressDownDate = useRef<Date | undefined>(undefined);
  const isRecording = useRef(false);
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

      console.log('Taking photo...');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo, 'photo');
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [camera, onMediaCaptured, takePhotoOptions]);

  const onStoppedRecording = useCallback(() => {
    isRecording.current = false;
    cancelAnimation(recordingProgress);
    console.log('stopped recording video!');
  }, [recordingProgress]);

  const stopRecording = useCallback(async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('calling stopRecording()...');
      await camera.current.stopRecording();
      console.log('called stopRecording()!');
    } catch (e) {
      console.error('failed to stop recording!', e);
    }
  }, [camera]);

  const startRecording = useCallback(() => {
    try {
      if (camera.current === null) {
        throw new Error('Camera ref is null!');
      }

      console.log('calling startRecording()...');
      camera.current.startRecording({
        flash: flash,
        onRecordingError: error => {
          console.error('Recording failed!', error);
          onStoppedRecording();
        },
        onRecordingFinished: video => {
          console.log(`Recording successfully finished! ${video.path}`);
          onMediaCaptured(video, 'video');
          onStoppedRecording();
        },
      });
      // TODO: wait until startRecording returns to actually find out if the recording has successfully started
      console.log('called startRecording()!');
      isRecording.current = true;
    } catch (e) {
      console.error('failed to start recording!', e, 'camera');
    }
  }, [camera, flash, onMediaCaptured, onStoppedRecording]);
  //#endregion

  const onTapBegan = () => {
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
  };

  const onTapFinalized = async () => {
    // exit "recording mode"
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
  };

  tapGesture
    .maxDuration(99999999)
    .onBegin(onTapBegan)
    .onEnd(() => {
      isPressingButton.value = false;
    })
    .onFinalize(onTapFinalized);

  const buttonStyle = useAnimatedStyle(() => {
    let scale: number;
    let bgColor = 'transparent';
    if (enabled) {
      if (isPressingButton.value) {
        scale = withRepeat(
          withSpring(1, {
            stiffness: 100,
            damping: 1000,
          }),
          -1,
          true,
        );
        bgColor = currentGesture.value === 'longPress' ? '#FF0000' : '#FFFFFF';
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
  }, [enabled, isPressingButton, currentGesture]);

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
    // backgroundColor: 'rgba(0,0,0,0.3)',
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
