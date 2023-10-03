import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import {AudioPlayerRecorder} from '@components/AudioPlayerRecorder';
import {onSendAudioNote} from '@components/VideoAudioComment/VideoAudioComment';

import {AudioPlayerRecorderProps} from './AudioPlayerRecorder.types';

export default {
  component: AudioPlayerRecorder,
  title: 'AudioPlayerRecorder',
  tags: ['autodocs'],
  argTypes: {
    progressDisplayMode: {
      control: {type: 'select', required: false},
      options: ['progressBar', 'soundwave'],
    },
    playTimeDisplayMode: {
      control: {type: 'select', required: false},
      options: ['default', 'countdown'],
    },
  },
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof AudioPlayerRecorder>;

export const Default: StoryObj<AudioPlayerRecorderProps> = {
  args: {
    onSendAudioNote,
    progressDisplayMode: 'progressBar',
    playTimeDisplayMode: 'default',
  },
};

export const Countdown: StoryObj<AudioPlayerRecorderProps> = {
  args: {
    onSendAudioNote,
    progressDisplayMode: 'progressBar',
    playTimeDisplayMode: 'countdown',
  },
};

export const Soundwave: StoryObj<AudioPlayerRecorderProps> = {
  args: {
    onSendAudioNote,
    progressDisplayMode: 'soundwave',
    playTimeDisplayMode: 'default',
  },
};
