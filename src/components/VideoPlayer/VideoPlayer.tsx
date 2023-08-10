import React, {FC} from 'react';
import {View} from 'react-native';

import RnmcVideoPlayer from 'react-native-media-console';

import PlayerProps from './VideoPlayer.d';

const VideoPlayer: FC<PlayerProps> = ({
  source,
  height,
  isFullscreen,
  ...props
}) => {
  const dynmClass = height && 'h-[' + height + 'px]';
  let className = dynmClass || 'h-[250px]';
  return (
    <View className={isFullscreen ? 'h-screen' : className}>
      <RnmcVideoPlayer
        {...props}
        source={source}
        isFullscreen={isFullscreen || false}
        onEnterFullscreen={() => {}}
        onExitFullscreen={() => {}}
        disableBack
      />
    </View>
  );
};
export default VideoPlayer;
