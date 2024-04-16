import {RefObject} from 'react';
import {Camera, RecordVideoOptions} from 'react-native-vision-camera';

import {CameraScreenProps, onMediaCapturedCallback} from './CameraScreen.types';

export type FilteredRecordVideoOptions = Omit<
  RecordVideoOptions,
  'onRecordingError' | 'onRecordingFinished' | 'flash'
>;

export type ManualStopRecordingOptions = {
  /**
   * Stop recording after delay milliseconds.
   */
  timeMustStopRecording?: number;
};

export type CaptureButtonProps = {
  flash: 'off' | 'on';
  enabled: boolean;
  camera: RefObject<Camera>;
  onMediaCaptured: onMediaCapturedCallback;
  setIsPressingButton: (isPressingButton: boolean) => void;
  recordingMode: CameraScreenProps['recordingMode'];
} & FilteredRecordVideoOptions &
  ManualStopRecordingOptions;
