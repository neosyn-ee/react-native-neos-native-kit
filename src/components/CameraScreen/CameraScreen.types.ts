import {FormatFilter} from 'react-native-vision-camera';

export type CameraScreenProps = {
  onMediaCaptured: () => void;
  formatFilters?: Partial<FormatFilter>[];
};
