import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import VirtualizedVideoList from './VirtualizedVideoList';

export default {
  title: 'Example/VirtualizedVideoList',
  component: VirtualizedVideoList,
  tags: ['autodocs'],
} as ComponentMeta<typeof VirtualizedVideoList>;

export const Default: StoryObj<{}> = {
  args: {},
};
