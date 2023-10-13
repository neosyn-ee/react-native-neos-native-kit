import React from 'react';

import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import CameraScreen from './CameraScreen';

type CameraScreenProps = {};

export default {
  title: 'CameraScreen',
  component: CameraScreen,
  argTypes: {},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof CameraScreen>;

export const Default: StoryObj<CameraScreenProps> = {
  args: {},
};
