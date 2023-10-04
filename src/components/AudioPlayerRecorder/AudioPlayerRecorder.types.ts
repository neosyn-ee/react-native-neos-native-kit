export type AudioPlayerRecorderProps = {
  onSendAudioNote: () => Promise<any>;
  setPaused?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  progressDisplayMode?: 'progressBar' | 'soundwave';
  playTimeDisplayMode?: 'default' | 'countdown';
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
