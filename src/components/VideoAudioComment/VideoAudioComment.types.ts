import {AudioPlayerRecorderProps} from '@components/AudioPlayerRecorder/AudioPlayerRecorder.types';
import {VideoPlayerProps} from '@components/VideoPlayer/VideoPlayer.type';

export type VideoAudioCommentProps = {
  video: VideoPlayerProps;
  audioPlayer: AudioPlayerRecorderProps;
  onSendAudioNote: () => Promise<any>;
};
