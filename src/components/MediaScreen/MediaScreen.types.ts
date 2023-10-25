import {PhotoFile, VideoFile} from 'react-native-vision-camera';

export type MediaScreenProps = {
  media: PhotoFile | VideoFile;
  type: 'photo' | 'video';
};
