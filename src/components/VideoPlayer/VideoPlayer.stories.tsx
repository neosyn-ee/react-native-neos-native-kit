import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import VideoPlayer from './VideoPlayer';
import {VideoPlayerProps} from './VideoPlayer.type';

export default {
  title: 'Example/VideoPlayer',
  component: VideoPlayer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fullscreenOrientation: {type: 'string', defaultValue: 'all'},
  },
} as ComponentMeta<typeof VideoPlayer>;

export const Fullscreen: StoryObj<VideoPlayerProps> = {
  args: {
    isFullscreen: true,
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    },
    fullscreenAutorotate: true,
    fullscreenOrientation: 'landscape',
  },
};

export const Default: StoryObj<VideoPlayerProps> = {
  args: {
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    },
  },
};
