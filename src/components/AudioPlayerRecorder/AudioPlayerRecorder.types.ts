export type AudioPlayerRecorderProps = {
  onSendAudioNote: () => Promise<any>;
  setMuted?: React.Dispatch<React.SetStateAction<boolean>>;
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
