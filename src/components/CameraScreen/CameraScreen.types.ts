import {FormatFilter} from 'react-native-vision-camera';

import {
  FilteredRecordVideoOptions,
  ManualStopRecordingOptions,
} from './CaptureButton.types';

export type onMediaCapturedCallback<TMedia> = (
  media: TMedia,
) => Promise<void> | void;

export type onCodeScannedCallback = (value: string) => Promise<void> | void;

export type CameraScreenProps<TMedia> = {
  formatFilters?: Partial<FormatFilter>[];
  onPressClose?: () => void;
} & (
  | ({
      recordingMode: 'photo' | 'video' | 'combined';
      onMediaCaptured: onMediaCapturedCallback<TMedia>;
      onCodeScanned?: never;
      stopOnFirstCodeScan?: never;
      validateValueScannedByUser?: never;
      validateValueScannedMessage?: never;
    } & FilteredRecordVideoOptions &
      ManualStopRecordingOptions)
  | ({
      recordingMode: 'scanner';
      onMediaCaptured?: never;
      stopOnFirstCodeScan?: boolean;
      onCodeScanned: onCodeScannedCallback;
      fileType?: never;
      videoCodec?: never;
      videoBitRate?: never;
      timeMustStopRecording?: never;
    } & (
      | {
          validateValueScannedByUser?: true;
          validateValueScannedMessage: (value: string) => string;
        }
      | {
          validateValueScannedByUser?: false;
          validateValueScannedMessage: never;
        }
    ))
);
