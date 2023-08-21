import {VideoPlayerProps} from 'react-native-media-console';

export type PlayerProps = VideoPlayerProps & {
  isFullscreen: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  playerInfo: React.MutableRefObject<{
    elapsedSecs: number;
    isFullscreen: boolean;
  }>;
};

export type VideoPlayerProps = {sourceUri: string};
