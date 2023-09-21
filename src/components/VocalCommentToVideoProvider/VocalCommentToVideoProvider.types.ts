import {VideoPlayerProps} from '@components/VideoPlayer/VideoPlayer.type';

export type VocalCommentToVideoProviderProps = {
  video: VideoPlayerProps;
  onSendAudio: () => void;
};
