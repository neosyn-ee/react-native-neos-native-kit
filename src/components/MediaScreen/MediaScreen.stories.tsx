import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

import MediaScreen from './MediaScreen';
import {MediaScreenProps} from './MediaScreen.types';

const SAMPLE_PHOTOFILE: PhotoFile = {
  isMirrored: false,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy2686721532453393324.jpg',
  isRawPhoto: false,
  height: 1440,
  orientation: 'landscape-right',
  width: 3200,
};

const SAMPLE_VIDEOFILE: VideoFile = {
  duration: 12.68,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy3831378659325484017.mp4',
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
