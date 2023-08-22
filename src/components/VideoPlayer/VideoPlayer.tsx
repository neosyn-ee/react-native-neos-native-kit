import React, {FC, useRef, useState} from 'react';
import {Modal, View} from 'react-native';

import RnmcVideoPlayer from 'react-native-media-console';
import Video from 'react-native-video';

import {VideoPlayerProps, VideoSizeProps} from './VideoPlayer.type';

export const Player: FC<VideoPlayerProps> = ({
  source,
  isFullscreen,
  setFullscreen,
  playerInfo,
  disableControls,
  ...props
}) => {
  const videoRef = useRef<Video | null>(null);
  const handleOnLoadOrPlay = () => {
    if (playerInfo?.current.elapsedSecs) {
      videoRef.current!.seek(playerInfo?.current.elapsedSecs);
    }
  };
  const handleOnEnterFullscreen = () => {
    setFullscreen?.(true);
  };
  const handleOnExitFullscreen = () => {
    setFullscreen?.(false);
  };
  return (
    <RnmcVideoPlayer
      videoRef={videoRef}
      className={isFullscreen ? 'h-screen' : 'h-full'}
      source={source}
      isFullscreen={isFullscreen}
      resizeMode="contain"
      toggleResizeModeOnFullscreen={false}
      onPlay={handleOnLoadOrPlay}
      onLoad={handleOnLoadOrPlay}
      onBack={handleOnExitFullscreen}
      onEnterFullscreen={handleOnEnterFullscreen}
      onExitFullscreen={handleOnExitFullscreen}
      onProgress={({currentTime}) => {
        playerInfo!.current.elapsedSecs = currentTime;
      }}
      disableFullscreen={!isFullscreen && disableControls}
      disablePlayPause={!isFullscreen && disableControls}
      disableSeekButtons={!isFullscreen && disableControls}
      disableSeekbar={!isFullscreen && disableControls}
      disableVolume={!isFullscreen && disableControls}
      disableTimer={!isFullscreen && disableControls}
      disableBack={!isFullscreen || disableControls}
      {...props}
    />
  );
};

const VideoPlayer: FC<VideoPlayerProps> = ({
  width,
  height,
  isFullscreen,
  disableControls,
  ...props
}) => {
  const [fullscreen, setFullscreen] = useState<boolean>(isFullscreen ?? false);
  const playerInfo = useRef({elapsedSecs: 0});
  const RenderedPlayer = (
    <Player
      setFullscreen={setFullscreen}
      isFullscreen={fullscreen}
      playerInfo={playerInfo}
      {...props}
    />
  );
  const sizes: VideoSizeProps = {
    width: width ?? '100%',
    height: height ?? 250,
  };
  return (
    <>
      {fullscreen ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={fullscreen}
          supportedOrientations={['portrait', 'landscape']}>
          {RenderedPlayer}
        </Modal>
      ) : (
        <View
          style={!fullscreen && sizes}
          pointerEvents={disableControls ? 'none' : undefined}>
          {RenderedPlayer}
        </View>
      )}
    </>
  );
};
export default VideoPlayer;
