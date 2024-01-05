import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

import MediaScreen from './MediaScreen';
import {MediaScreenProps} from './MediaScreen.types';

export const SAMPLE_PHOTOFILE: PhotoFile = {
  isMirrored: false,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy3430819119143105519.jpg',
  isRawPhoto: false,
  height: 1440,
  orientation: 'landscape-right',
  width: 3200,
};

export const SAMPLE_VIDEOFILE: VideoFile = {
  duration: 12.68,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy9145641682697322369.mp4',
height: 1000,
width: 1000
};

export default {
  title: 'MediaScreen',
  component: MediaScreen,
  argTypes: {},
  tags: ['autodocs'],
} as ComponentMeta<typeof MediaScreen>;

export const PhotoPreview: StoryObj<MediaScreenProps> = {
  args: {
    media: SAMPLE_PHOTOFILE,
    type: 'photo',
  },
};

export const VideoPreview: StoryObj<MediaScreenProps> = {
  args: {
    media: SAMPLE_VIDEOFILE,
    type: 'video',
  },
};
