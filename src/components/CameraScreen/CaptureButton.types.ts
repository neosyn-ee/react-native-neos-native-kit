import {RefObject} from 'react';

import {Camera, PhotoFile, VideoFile} from 'react-native-vision-camera';

export type CaptureButtonProps = {
  flash: 'off' | 'on';
  enabled: boolean;
  camera: RefObject<Camera>;
  onMediaCaptured: (
    media: PhotoFile | VideoFile,
    type: 'photo' | 'video',
  ) => void;
  setIsPressingButton: (isPressingButton: boolean) => void;
};
