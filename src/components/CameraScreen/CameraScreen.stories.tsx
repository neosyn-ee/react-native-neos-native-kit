import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import CameraScreen from './CameraScreen';

type CameraScreenProps = {};

export default {
  title: 'CameraScreen',
  component: CameraScreen,
  argTypes: {},
  tags: ['autodocs'],
} as ComponentMeta<typeof CameraScreen>;

export const Default: StoryObj<CameraScreenProps> = {
  args: {},
};
