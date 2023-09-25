import React from 'react';
import {View} from 'react-native';

import {AudioPlayerRecorder} from '@components/AudioPlayerRecorder';
import {VideoPlayer} from '@components/VideoPlayer';

import {VideoAudioCommentProps} from './VideoAudioComment.types';

const BOTTOM_APPBAR_HEIGHT = 80;

const VideoAudioComment = ({video}: VideoAudioCommentProps) => {
  return (
    <>
      <View className="flex-1" style={{marginBottom: BOTTOM_APPBAR_HEIGHT}}>
        <VideoPlayer {...video} />
      </View>
      <AudioPlayerRecorder />
    </>
  );
};

export default VideoAudioComment;
