import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

import CameraScreen from './CameraScreen';
import {CameraScreenProps, onMediaCapturedCallback} from './CameraScreen.types';

const onMediaCaptured: onMediaCapturedCallback = (
  media: PhotoFile | VideoFile,
  _type: 'photo' | 'video',
) => {
  console.log('Media captured!', media);
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
