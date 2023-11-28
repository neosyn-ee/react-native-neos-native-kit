import {FormatFilter, PhotoFile, VideoFile} from 'react-native-vision-camera';

export type onMediaCapturedCallback = (
  media: PhotoFile | VideoFile,
) => Promise<void> | void;

export type onCodeScannedCallback = (value: string) => Promise<void> | void;

export type CameraScreenProps = {
  formatFilters?: Partial<FormatFilter>[];
} & (
  | {
      recordingMode: 'photo' | 'video' | 'combined';
      onMediaCaptured: onMediaCapturedCallback;
      onCodeScanned: never;
      stopOnFirstCodeScan: never;
      validateValueScannedByUser: never;
      validateValueScannedMessage: never;
    }
  | ({
      recordingMode: 'scanner';
      onMediaCaptured: never;
      stopOnFirstCodeScan?: boolean;
      onCodeScanned: onCodeScannedCallback;
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
