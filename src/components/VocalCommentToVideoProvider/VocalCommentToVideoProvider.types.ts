import {VideoPlayerProps} from '@components/VideoPlayer/VideoPlayer.type';

export type VocalCommentToVideoProviderProps = {
  video: VideoPlayerProps;
  onSendAudio: () => void;
};

export type ActionsBarStateType = {
  recordSecs?: number;
  recordTime?: string;
  currentPositionSec?: number;
  currentDurationSec?: number;
  playTime?: string;
  duration?: string;
};
