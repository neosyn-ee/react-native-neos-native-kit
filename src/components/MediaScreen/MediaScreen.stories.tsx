import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {PhotoFile, VideoFile} from 'react-native-vision-camera';

import MediaScreen from './MediaScreen';
import {MediaScreenProps} from './MediaScreen.types';

const SAMPLE_PHOTOFILE: PhotoFile = {
  isMirrored: false,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy6309915383638771911.jpg',
  isRawPhoto: false,
  height: 1440,
  orientation: 'landscape-right',
  width: 3200,
};

const SAMPLE_VIDEOFILE: VideoFile = {
  duration: 10.787,
  path: '/data/user/0/com.neosyn.reactNativeCore/cache/mrousavy8602094910151002475.mp4',
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
