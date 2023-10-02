export type AudioPlayerRecorderProps = {
  onSendAudioNote: () => Promise<any>;
  progressDisplayMode?: 'progressBar' | 'soundwave';
};

export type AudioPlayerRecorderStateType = {
  recordSecs?: number;
  recordTime?: string;
  currentPositionSec?: number;
  currentDurationSec?: number;
  playTime?: string;
  duration?: string;
};

export enum IsSentEnum {
  Idle = 'idle',
  Sending = 'sending',
  Sent = 'sent',
  Error = 'error',
}
