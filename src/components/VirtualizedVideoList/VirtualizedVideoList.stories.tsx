import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import data from 'storage/database/post';

import {VirtualizedVideoList} from '@components/VirtualizedVideoList';

import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

export default {
  title: 'VirtualizedVideoList',
  component: VirtualizedVideoList,
  tags: ['autodocs'],
} as ComponentMeta<typeof VirtualizedVideoList>;

export const Default: StoryObj<VirtualizedVideoListProps> = {
  args: {
    data: data.slice(0, 20),
    paginated: false,
    viewAreaCoveragePercentThreshold: 60,
  },
};
