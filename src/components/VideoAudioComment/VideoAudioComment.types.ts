import {VideoPlayerProps} from '@components/VideoPlayer/VideoPlayer.type';

export type VideoAudioCommentProps = {
  video: VideoPlayerProps;
  onSendAudio: () => void;
};
