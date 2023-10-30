import {FormatFilter, PhotoFile, VideoFile} from 'react-native-vision-camera';

export type onMediaCapturedCallback = (
  media: PhotoFile | VideoFile,
  type: 'photo' | 'video',
) => void;

export type CameraScreenProps = {
  onMediaCaptured: onMediaCapturedCallback;
  formatFilters?: Partial<FormatFilter>[];
  recordingMode: 'photo' | 'video' | 'combined';
};
