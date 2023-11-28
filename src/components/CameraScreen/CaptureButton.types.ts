import {RefObject} from 'react';

import {Camera} from 'react-native-vision-camera';

import {CameraScreenProps, onMediaCapturedCallback} from './CameraScreen.types';

export type CaptureButtonProps = {
  flash: 'off' | 'on';
  enabled: boolean;
  camera: RefObject<Camera>;
  onMediaCaptured: onMediaCapturedCallback;
  setIsPressingButton: (isPressingButton: boolean) => void;
  recordingMode: CameraScreenProps['recordingMode'];
};