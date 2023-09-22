import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import {SingletonHooksContainer} from 'react-singleton-hook';

import {VocalCommentToVideoProvider} from '@components/VocalCommentToVideoProvider';

import {VocalCommentToVideoProviderProps} from './VocalCommentToVideoProvider.types';

export default {
  component: VocalCommentToVideoProvider,
  title: 'Example/VocalCommentToVideoProvider',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        <SingletonHooksContainer />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof VocalCommentToVideoProvider>;

export const Default: StoryObj<VocalCommentToVideoProviderProps> = {
  args: {
    video: {
      height: '100%',
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

// export const Pinned = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };
