import React from 'react';
import {View} from 'react-native';

import {AudioPlayerRecorder} from '@components/AudioPlayerRecorder';
import {VideoPlayer} from '@components/VideoPlayer';
import {delay} from '@utils/helpers';

import {VideoAudioCommentProps} from './VideoAudioComment.types';

const BOTTOM_APPBAR_HEIGHT = 80;

const VideoAudioComment = ({video}: VideoAudioCommentProps) => {
  const onSendAudioNote = async (): Promise<any> => {
    await delay(200);
    // throw new Error('This is a fake error message');
    return {status: 'ok', message: 'Audio note sent successfully'};
  };

  return (
    <>
      <View className="flex-1" style={{marginBottom: BOTTOM_APPBAR_HEIGHT}}>
        <VideoPlayer {...video} />
      </View>
      <AudioPlayerRecorder onSendAudioNote={onSendAudioNote} />
    </>
  );
};

export default VideoAudioComment;
