export type AudioPlayerRecorderProps = {
  fileName?: string;
  onSendAudioNote: (
    fileName: string,
    filePath?: string,
    fileSource?: string,
    videoTimeInSecsOnRecStarted?: number,
  ) => Promise<any>;
  setMuted?: React.Dispatch<React.SetStateAction<boolean>>;
  progressDisplayMode?: 'progressBar' | 'soundwave';
  playTimeDisplayMode?: 'default' | 'countdown';
  playerInfoElapsedSecs?: () => number;
  text?: string;
  disabledButton?: boolean;
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
