import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import {VolumeManager} from 'react-native-volume-manager';

import {CaptureButtonProps} from './CaptureButton.types';
import {CAPTURE_BUTTON_SIZE} from '../../utils/constants';

const FIGURE_SIZE = CAPTURE_BUTTON_SIZE * 0.75;
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
  fileType,
  videoBitRate,
  videoCodec,
  timeMustStopRecording,
}: CaptureButtonProps) => {
  const pressDownDate = useRef<Date | undefined>(undefined);
  const [isRecording, setIsRecording] = useState(false);
  const recordingProgress = useSharedValue(0);

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
      onMediaCaptured(photo);
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

  useEffect(() => {
    console.log('use');

    const volumeListener = VolumeManager.addVolumeListener(result => {
      let value;
      if (
        (recordingMode === 'photo' || recordingMode === 'video') &&
        value !== result
      ) {
        console.log(result.volume, 'useEffect');
        if (!isRecording) {
          startRecording();
          setIsPressingButton(true);
          value = result;
        } else {
          stopRecording();
        }
      }
    });

    return () => volumeListener.remove();
  }, []);

  const startRecording = useCallback(() => {
    try {
      if (camera.current === null) {
        throw new Error('Camera ref is null!');
      }
      if (timeMustStopRecording) {
        setTimeout(() => {
          camera.current?.stopRecording();
        }, timeMustStopRecording);
      }

      camera.current.startRecording({
        fileType: fileType,
        videoBitRate: videoBitRate,
        videoCodec: videoCodec,
        flash: flash,
        onRecordingError: error => {
          console.error('Recording failed!', error);
          onStoppedRecording();
        },
        onRecordingFinished: video => {
          onMediaCaptured(video);
          onStoppedRecording();
        },
      });

      // TODO: wait until startRecording returns to actually find out if the recording has successfully started
      setIsRecording(true);
    } catch (e) {
      console.error('failed to start recording!', e, 'camera');
    }
  }, [
    camera,
    fileType,
    flash,
    onMediaCaptured,
    onStoppedRecording,
    videoBitRate,
    videoCodec,
  ]);
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
                await stopRecording();
              }
            } finally {
              setIsPressingButton(false);
            }
          },
        };
      default:
        return {
          onTapBegan() {
            console.log('tap started');
          },
          onTapFinalized() {
            console.log('tap ended');
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

  const figureStyle = useAnimatedStyle(() => {
    let scale: number;
    let opacity: number = 1;
    let width = FIGURE_SIZE;
    let height = FIGURE_SIZE;
    let borderRadius = FIGURE_SIZE / 2;
    let backgroundColor =
      recordingMode === 'photo' || recordingMode === 'combined'
        ? 'rgba(255, 255, 255, 0.75)'
        : 'red';

    if (isPressingButton.value) {
      backgroundColor = 'white';
      scale = withSpring(0.9, {
        stiffness: 100,
        damping: 1000,
      });
    } else {
      scale = withSpring(1, {
        stiffness: 500,
        damping: 300,
      });
    }

    if (isRecording) {
      backgroundColor = 'red';
      opacity = withRepeat(withSpring(0.75, {stiffness: 40}), -1, true);
      if (recordingMode === 'video') {
        width = 32;
        height = 32;
        borderRadius = 8;
      }
    }

    const config = {duration: 200, easing: Easing.inOut(Easing.quad)};

    return {
      width: withTiming(width, config),
      height: withTiming(height, config),
      borderRadius: withTiming(borderRadius, config),
      backgroundColor: withTiming(backgroundColor, config),
      opacity,
      transform: [{scale}],
    };
  }, [enabled, isRecording, recordingMode, isPressingButton]);

  return (
    <Animated.View style={[styles.container]}>
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={styles.circle}>
          <Animated.View style={figureStyle} />
        </Animated.View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const CaptureButton = React.memo(_CaptureButton);
