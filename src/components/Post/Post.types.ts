import {VideoPlayerProps} from 'react-native-media-console';

export type PostProps = {
  video: Partial<VideoPlayerProps>;
  customContent: JSX.Element; // Sotto il videoplayer (instagram feed)
  customIcons: JSX.Element; // Icone TicTok
};

export type sourceType = VideoPlayerProps['source'];
