import {VideoProperties} from 'react-native-video';

type VideoPlayerProps = VideoProperties & {
  height?: number;
  isFullscreen?: boolean;
};

export default VideoPlayerProps;
