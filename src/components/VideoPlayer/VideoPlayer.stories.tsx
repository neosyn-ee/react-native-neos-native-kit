import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import VideoPlayer from './VideoPlayer';
import {VideoPlayerProps} from './VideoPlayer.type';

export default {
  title: 'Example/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
} as ComponentMeta<typeof VideoPlayer>;

export const Default: StoryObj<VideoPlayerProps> = {
  args: {
    autoplay: true,
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    },
  },
};

export const Fullscreen: StoryObj<VideoPlayerProps> = {
  args: {
    autoplay: false,
    isFullscreen: true,
    source: Default.args!.source,
  },
};

export const FullscreenOnRotate: StoryObj<VideoPlayerProps> = {
  args: {
    autoplay: false,
    fullscreenAutorotate: true,
    fullscreenOrientation: 'landscape',
    source: Default.args!.source,
  },
};
