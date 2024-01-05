import {AudioPlayerRecorderProps} from '../AudioPlayerRecorder/AudioPlayerRecorder.types';
import {VideoPlayerProps} from '../VideoPlayer/VideoPlayer.type';

export type VideoAudioCommentProps = {
  video: VideoPlayerProps;
  audioPlayer: AudioPlayerRecorderProps;
};

export type DropboxError = {
  code: number;
  name: string;
};
