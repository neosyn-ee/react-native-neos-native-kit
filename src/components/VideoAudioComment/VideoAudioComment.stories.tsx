import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import {VideoAudioComment} from '@components/VideoAudioComment';

import {VideoAudioCommentProps} from './VideoAudioComment.types';

export default {
  component: VideoAudioComment,
  title: 'Example/VideoAudioComment',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof VideoAudioComment>;

export const Default: StoryObj<VideoAudioCommentProps> = {
  args: {
    video: {
      height: '100%',
      autoplay: true,
      showOnStart: false,
      resizeMode: 'cover',
      disableFullscreen: true,
      posterResizeMode: 'cover',
      muted: true,
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    },
  },
};
