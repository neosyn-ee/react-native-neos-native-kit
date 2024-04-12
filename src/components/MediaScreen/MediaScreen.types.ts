import {AlertButton} from 'react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

export type MediaScreenProps = {
  media: PhotoFile | VideoFile;
  type: 'photo' | 'video';
  onPressClose: () => void;
  /**
   * icon from react-native-vector-icons MaterialCommunityIcons
   */
  icon?: string;
  albumName?: string;
  modalSaveTextSuccess: {
    title: string;
    description: string;
    buttons?: AlertButton[];
  };
  modalSaveTextError: {
    title: string;
    description: string;
  };
  onSaveCloudPressed?: () => void;
  onSaveLocalPressed?: () => void;
};
