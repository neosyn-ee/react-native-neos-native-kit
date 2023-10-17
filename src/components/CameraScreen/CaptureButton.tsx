import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {CaptureButtonProps} from './CaptureButton.types';

const CAPTURE_BUTTON_SIZE = 75;

const CaptureButton = ({capturePhoto}: CaptureButtonProps) => {
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onStart(() => runOnJS(capturePhoto)())
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)',
    transform: [{scale: withTiming(pressed.value ? 1.2 : 1)}],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </GestureDetector>
    </GestureHandlerRootView>
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
    paddingVertical: 20,
  },
  circle: {
    height: CAPTURE_BUTTON_SIZE,
    width: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
  },
});

export default CaptureButton;
