import {AlertButton} from 'react-native';

import {VideoPlayerProps} from '../VideoPlayer/VideoPlayer.type';

export type MediaScreenProps = {
  type: 'photo' | 'video';
  path: string;
  isLocalPath?: boolean;
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
} & Omit<VideoPlayerProps, 'source'>;
