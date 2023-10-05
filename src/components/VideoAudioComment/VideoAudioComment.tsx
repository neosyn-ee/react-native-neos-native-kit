import React, {useState} from 'react';
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
  const [paused, setPaused] = useState<boolean>();
  const [videoPlayerProps, setNewPlayerProps] = useState({
    autoplay: true,
    showOnStart: true,
    alwaysShowControls: true,
    controlAnimationTiming: 0,
    disableBack: true,
    disableVolume: false,
    disablePlayPause: false,
    disableFullscreen: true,
    disableSeekButtons: true,
    tapAnywhereToPause: true,
  });

  const showControls = () => {
    setNewPlayerProps(prevState => ({
      ...prevState,
      disableVolume: false,
      disablePlayPause: false,
      disableOverlay: false,
    }));
  };

  const hideControls = () => {
    setNewPlayerProps(prevState => ({
      ...prevState,
      disableVolume: true,
      disablePlayPause: true,
      disableOverlay: true,
    }));
  };

  const onEnd = () => {
    showControls();
  };

  const onPause = () => {
    showControls();
  };

  const onPlay = () => {
    setPaused(false);
    hideControls();
  };

  return (
    <>
      <View className="flex-1" style={{marginBottom: BOTTOM_APPBAR_HEIGHT}}>
        <VideoPlayer
          {...video}
          {...videoPlayerProps}
          paused={paused}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
        />
      </View>
      <AudioPlayerRecorder {...audioPlayer} setPaused={setPaused} />
    </>
  );
};

export default VideoAudioComment;
