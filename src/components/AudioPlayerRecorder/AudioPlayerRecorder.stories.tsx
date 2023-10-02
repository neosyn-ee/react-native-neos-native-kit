import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import {AudioPlayerRecorder} from '@components/AudioPlayerRecorder';
import {delay} from '@utils/helpers';

import {AudioPlayerRecorderProps} from './AudioPlayerRecorder.types';

export default {
  component: AudioPlayerRecorder,
  title: 'Example/AudioPlayerRecorder',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof AudioPlayerRecorder>;

const onSendAudioNote = async (): Promise<any> => {
  await delay(500);
  // throw new Error('This is a fake error message');
  return {status: 'ok', message: 'Audio note sent successfully'};
};

export const Default: StoryObj<AudioPlayerRecorderProps> = {
  args: {
    onSendAudioNote,
  },
};

export const Soundwave: StoryObj<AudioPlayerRecorderProps> = {
  args: {
    onSendAudioNote,
    progressDisplayMode: 'soundwave',
  },
};
