import React from 'react';

import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import VideoPlayer from './VideoPlayer';
import {VideoPlayerProps} from './VideoPlayer.type';

export default {
  title: 'Example/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    source: {
      control: 'object',
    },
    autoplay: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
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
    autoplay: true,
    isFullscreen: true,
    source: Default.args!.source,
  },
  argTypes: {
    isFullscreen: {
      control: 'boolean',
    },
  },
};

export const FullscreenOnRotate: StoryObj<VideoPlayerProps> = {
  args: {
    autoplay: true,
    fullscreenAutorotate: true,
    fullscreenOrientation: 'landscape',
    source: Default.args!.source,
  },
  argTypes: {
    fullscreenOrientation: {
      control: 'select',
      options: ['all', 'landscape', 'portrait'],
    },
    fullscreenAutorotate: {
      if: {arg: 'fullscreenOrientation'},
      control: 'boolean',
    },
  },
};

export const ControlsDisabled: StoryObj<VideoPlayerProps> = {
  args: {
    autoplay: true,
    thumb: 'https://picsum.photos/1920/1080',
    disableControlsWhen: {default: true, fullscreen: true},
    source: Default.args!.source,
  },
  argTypes: {
    thumb: {
      control: 'text',
    },
    disableControlsWhen: {
      control: 'object',
    },
  },
};
