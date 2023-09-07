import React, {memo} from 'react';
import {View} from 'react-native';

import VideoPlayer from 'react-native-media-console';

import {PostProps} from './Post.types';

const Post = ({
  video: {source, paused, controls, ...others},
  body,
  actions,
}: PostProps): JSX.Element => {
  return (
    <View className="bg-[#fff]">
      <VideoPlayer
        containerStyle={{height: 250}}
        paused={paused}
        resizeMode="cover"
        posterResizeMode="cover"
        source={source!}
        disableBack={!controls}
        disableFocus={!controls}
        disableFullscreen={!controls}
        disablePlayPause={!controls}
        disableSeekButtons={!controls}
        disableSeekbar={!controls}
        disableTimer={!controls}
        disableVolume={!controls}
        {...others}
      />
      <View className="p-3">
        {actions}
        {body}
      </View>
    </View>
  );
};

export default memo(Post);
