import RNFetchBlob from 'react-native-blob-util';

import {DropboxError} from './VideoAudioComment.types';
export {default as VideoAudioComment} from './VideoAudioComment';

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

export const onSendAudioNote = async (
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
