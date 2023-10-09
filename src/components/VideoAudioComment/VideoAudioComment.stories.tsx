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
  const DROPBOX_PERSONAL_ACCESS_TOKEN =
    'uat.AAZn--f6ohqm_BO-foQGzrNSoObM6fAmGbeqZ_u_xuoE2at6yqVUq41S87a0JsBnVotiv9jRDhK8YGJlS6esllR6v-Q8tPOOxg0_HkWb-WHtLLf6kedubw_6s_T6jxZr3FKDDQ_yoo6hgEyhnGDZud-uBU6UJ59mREj9HQ6eXTR9sJ-juD8GOZ__BbDEsH6x0l4HtRvjoruSGCyoejTy1K2ZBPUt4JWID7iJXFYUq77Mj-uhIpasspp-fPRmCOqO-RrmJBa4hrZk_do55M6Zr_uowrAhSfurY2Xa7_U1NbDz-9PR3qWuOUjmRIBWSSZ_ehyTeJjc4YFjgfvqkEbDRn0NuEQZnLGLn4rij9N9fUfJqJawxJNHPvlyH3G1M9--2TFUHSbV3tPS8vU8JUbCvpVOFUa09e731GWtmnFXRAVoFyZa3ITc61jJ1OjcEw8fhHIL_bEy10UQAGFYUK9NBwPrcMB17G25ehWrG8T8TPqC31l2x204o6uicJy0gAdZ7btrny8CdrBKIAyXgjoRvE_IsjvcwF4Podf1-hxGNbwI_mM0twhZnI0-VJpgOXygTdvGccnkeg8BarsF0ZIwvFNr4i4jXOE5v3kmXq7wyz1_D302Y1_S5Y9vewPi1AswOt21LZ-m_UX7kOQaT6xlJdlQXOIy9BHti231koXeQw_QPFB3UYcn9sOQW3WNgcieL7g1H8pR73_viVtVSERpB-Q6dU4faNxJ6WPeLa0IBhDCkmd3erDzC4aNT9F3Fwew_dz4OplP95IW3dohw8NlaQo3IuQhGsyC6g749jPNROi6pG87naapAxV_NOsYjE-NQBIRhcVONMsQHvWVffPxYyxpVI95Zlk7BzkYqzOpP_2nK9-64iSiyJmC78PQWib0Hg63JTvvxxXn2sIEgmdiy89UMeEukXUPuQuFGVYjm-L2ACqRmL11j_nGGtV0IgReflq3d7TyMLd2w-XM6lisj_pzAJPFftqPf7RWo-6dwZnJm9A_LsYk2DEQyuzVYzBnvg7AA6qnc-f8QoWNacXJNle7sGRKu8IlLugjNIFICarjZnEF68ToHmIBdS5xF1ijwdTzuleTpNPumuQkSI298TU99WcUv3on7xc585KPPvlzKmgQCUBnoigUMw388rNLzrZ-gWDn03fo9NB3XCDXCdUtB8qWVbOtGrANDfZbc1PzPtA76vxFIEeLeqJFy9FXvLF4A6Op2hAo1IYYfcwlke8-yT7FjpSWRJQcqxRY6ptFwqZS2S74PspUqEdMYqdWm2bp3AsnK9g9TJj7VlWgptRMYCEw0PN_-61kggd_NdrBNeC79yHKfZiewpL7d3qD692DeixmbgH6PCcARrsyzEV_En8sQHvS5BJb48kMiZXZ_EMLtPXtG8Gr26ePGuO52KU';
  try {
    // Post binary data from existing file
    const res = await RNFetchBlob.fetch(
      'POST',
      'https://content.dropboxapi.com/2/files/upload',
      {
        Authorization: `Bearer ${DROPBOX_PERSONAL_ACCESS_TOKEN}`,
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
