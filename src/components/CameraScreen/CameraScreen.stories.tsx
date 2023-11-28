import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

import CameraScreen from './CameraScreen';
import {
  CameraScreenProps,
  onCodeScannedCallback,
  onMediaCapturedCallback,
} from './CameraScreen.types';

const onMediaCaptured: onMediaCapturedCallback = (
  media: PhotoFile | VideoFile,
) => {
  console.log('Media captured!', media);
};

const onCodeScanned: onCodeScannedCallback = value => {
  console.log('Code found! Decoded value:', value);
};

const validateValueScannedMessage: (value: string) => string = value => {
  if (value.length > 10) {
    return 'Valid!';
  }
  return 'Invalid value';
};

export default {
  title: 'CameraScreen',
  component: CameraScreen,
  argTypes: {},
  tags: ['autodocs'],
} as ComponentMeta<typeof CameraScreen>;

export const Default: StoryObj<CameraScreenProps> = {
  args: {
    onMediaCaptured,
  },
};

export const RECModeVideo: StoryObj<CameraScreenProps> = {
  args: {
    onMediaCaptured,
    recordingMode: 'video',
  },
};

export const RECModePhoto: StoryObj<CameraScreenProps> = {
  args: {
    onMediaCaptured,
    recordingMode: 'photo',
  },
};

export const RECModeCombined: StoryObj<CameraScreenProps> = {
  args: {
    onMediaCaptured,
    recordingMode: 'combined',
  },
};

export const RECModeScanner: StoryObj<CameraScreenProps> = {
  args: {
    recordingMode: 'scanner',
    onCodeScanned,
  },
};

export const RECModeScannerWithValidation: StoryObj<CameraScreenProps> = {
  args: {
    recordingMode: 'scanner',
    onCodeScanned,
    validateValueScannedByUser: true,
    validateValueScannedMessage,
  },
};

export const RECModeScannerNoStop: StoryObj<CameraScreenProps> = {
  args: {
    recordingMode: 'scanner',
    onCodeScanned,
    stopOnFirstCodeScan: false,
  },
};
