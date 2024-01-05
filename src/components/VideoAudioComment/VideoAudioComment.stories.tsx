import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import {
  onSendAudioNote,
  VideoAudioComment,
} from '../VideoAudioComment';

import {VideoAudioCommentProps} from './VideoAudioComment.types';

export default {
  component: VideoAudioComment,
  title: 'VideoAudioComment',
  tags: ['autodocs'],
  argTypes: {
    video: {
      control: 'object',
    },
    audioPlayer: {
      control: 'object',
    },
  },
  args: {
    video: {
      height: '100%',
      posterResizeMode: 'cover',
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    },
  },
} as ComponentMeta<typeof VideoAudioComment>;

export const Default: StoryObj<VideoAudioCommentProps> = {
  args: {
    audioPlayer: {
      onSendAudioNote,
      progressDisplayMode: 'soundwave',
    },
  },
};
