import {FormatFilter} from 'react-native-vision-camera';

import {SCREEN_ASPECT_RATIO} from '../../utils/constants';

export {default as CameraScreen} from './CameraScreen';

export const DEFAULT_CAMERA_FORMAT_FILTERS: Array<Partial<FormatFilter>> = [
  {photoHdr: true},
  {videoHdr: true},
  {videoAspectRatio: SCREEN_ASPECT_RATIO},
  {videoResolution: 'max'},
  {photoAspectRatio: SCREEN_ASPECT_RATIO},
  {photoResolution: 'max'},
];
