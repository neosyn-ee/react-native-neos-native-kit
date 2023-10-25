import {FormatFilter} from 'react-native-vision-camera';

import {CaptureButtonProps} from './CaptureButton.types';

export type onMediaCapturedCallback = CaptureButtonProps['onMediaCaptured'];

export type CameraScreenProps = {
  onMediaCaptured?: onMediaCapturedCallback;
  formatFilters?: Partial<FormatFilter>[];
};
