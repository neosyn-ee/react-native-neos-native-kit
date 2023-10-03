import React from 'react';
import {View} from 'react-native';

import {AudioPlayerRecorder} from '@components/AudioPlayerRecorder';
import {VideoPlayer} from '@components/VideoPlayer';
import {delay} from '@utils/helpers';

import {VideoAudioCommentProps} from './VideoAudioComment.types';

const BOTTOM_APPBAR_HEIGHT = 80;
export const onSendAudioNote = async (): Promise<any> => {
  await delay(500);
  // throw new Error('This is a fake error message');
  return {status: 'ok', message: 'Audio note sent successfully'};
};

const VideoAudioComment = ({video, audioPlayer}: VideoAudioCommentProps) => {
  return (
    <>
      <View className="flex-1" style={{marginBottom: BOTTOM_APPBAR_HEIGHT}}>
        <VideoPlayer {...video} />
      </View>
      <AudioPlayerRecorder {...audioPlayer} />
    </>
  );
};

export default VideoAudioComment;
