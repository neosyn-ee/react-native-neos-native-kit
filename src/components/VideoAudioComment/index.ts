import RNFetchBlob from 'react-native-blob-util';
import Config from 'react-native-config';

import {DropboxError} from './VideoAudioComment.types';
export {default as VideoAudioComment} from './VideoAudioComment';

const DROPBOX_API_ERRORS: Array<DropboxError> = [
  {
    code: 400,
    name: 'Bad Request',
  },
  {
    code: 401,
    name: 'Access Unauthorized',
  },
  {
    code: 403,
    name: 'Access Denied',
  },
  {
    code: 409,
    name: 'Endpoint Conflict',
  },
  {
    code: 429,
    name: 'Rate Limit Reached',
  },
  {
    code: 500,
    name: 'Internal Server Error',
  },
];

export const onSendAudioNote = async (
  fileName: string,
  filePath?: string,
  fileSource?: string,
  videoTimeInSecsOnRecStarted?: number,
): Promise<any> => {
  try {
    console.log(
      `Started recording when video elapsed time was: ${videoTimeInSecsOnRecStarted} secs`,
    );
    // Post binary data from existing file
    const res = await RNFetchBlob.fetch(
      'POST',
      'https://content.dropboxapi.com/2/files/upload',
      {
        Authorization: `Bearer ${Config.DROPBOX_ACCESS_TOKEN}`,
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
      data,
    } = res;
    const errCodes = DROPBOX_API_ERRORS.map(err => err.code);
    if (errCodes.includes(status)) {
      throw new Error(data);
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};
