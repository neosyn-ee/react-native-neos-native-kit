import React from 'react';

import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';
import RNFetchBlob from 'react-native-blob-util';
import {SingletonHooksContainer} from 'react-singleton-hook';

import {VideoAudioComment} from '@components/VideoAudioComment';

import {DropboxError, VideoAudioCommentProps} from './VideoAudioComment.types';

const DROPBOX_API_ERRORS: Array<DropboxError> = [
  {
    code: 401,
    desc: 'Access Unauthorized',
  },
  {
    code: 403,
    desc: 'Access Denied',
  },
  {
    code: 409,
    desc: 'Endpoint Conflict',
  },
  {
    code: 429,
    desc: 'Rate Limit Reached',
  },
  {
    code: 500,
    desc: 'Internal Server Error',
  },
];

const onSendAudioNote = async (
  fileName: string,
  filePath?: string,
  fileSource?: string,
): Promise<any> => {
  try {
    // Post binary data from existing file
    const res = await RNFetchBlob.fetch(
      'POST',
      'https://content.dropboxapi.com/2/files/upload',
      {
        Authorization: 'Bearer [YOUR_DROPBOX_ACCESS_TOKEN]',
        'Dropbox-API-Arg': JSON.stringify({
          path: `/${fileName}.m4a`,
          mode: 'add',
          autorename: true,
          mute: false,
        }),
        'Content-Type': 'application/octet-stream',
      },
      filePath ? RNFetchBlob.wrap(filePath) : fileSource,
    );
    const {
      respInfo: {status},
    } = res;
    const errCodes = DROPBOX_API_ERRORS.map(err => err.code);
    if (errCodes.includes(status)) {
      const error = DROPBOX_API_ERRORS.find(err => err.code === status);
      const msg = `${status} ${error?.desc}`;
      throw new Error(msg);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  component: VideoAudioComment,
  title: 'VideoAudioComment',
  tags: ['autodocs'],
  argTypes: {
    video: {
      control: 'object',
    },
    audioPlayer: {
      control: 'object',
    },
  },
  args: {
    video: {
      height: '100%',
      posterResizeMode: 'cover',
      thumb:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
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
} as ComponentMeta<typeof VideoAudioComment>;

export const Default: StoryObj<VideoAudioCommentProps> = {
  args: {
    onSendAudioNote,
    audioPlayer: {
      onSendAudioNote,
      progressDisplayMode: 'soundwave',
    },
  },
};
