import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {Modal, StatusBar, View} from 'react-native';

import RnmcVideoPlayer from 'react-native-media-console';
import Video, {OnProgressData, OnSeekData} from 'react-native-video';

import {useScreenOrientation} from '@hooks/useScreenOrientation';
import {isAndroid} from '@utils/helpers';

import {
  PlayerProps,
  VideoPlayerProps,
  VideoSizeProps,
} from './VideoPlayer.type';

export const Player: FC<PlayerProps> = memo(
  ({
    source,
    isFullscreen,
    paused,
    setPaused,
    setFullscreen,
    playerInfo,
    disableControls,
    ...props
  }) => {
    const videoRef = useRef<Video | null>(null);

    const handleOnLoad = () => {
      if (playerInfo?.current.elapsedSecs) {
        videoRef.current!.seek(playerInfo?.current.elapsedSecs);
      }
    };
    const handleOnPlay = () => {
      handleOnLoad();
      if (paused) {
        setPaused(false);
      }
    };
    const handleOnPause = () => {
      setPaused(true);
    };
    const handleOnEnterFullscreen = () => {
      setFullscreen?.(true);
    };
    const handleOnExitFullscreen = () => {
      setFullscreen?.(false);
    };
    const handleOnProgress = ({currentTime}: OnProgressData) => {
      playerInfo!.current.elapsedSecs = currentTime;
    };
    const handleOnSeek = ({seekTime}: OnSeekData) => {
      if (paused) {
        playerInfo!.current.elapsedSecs = seekTime;
      }
    };

    return (
      <RnmcVideoPlayer
        videoRef={videoRef}
        className="h-full"
        source={source}
        isFullscreen={isFullscreen}
        resizeMode="contain"
        toggleResizeModeOnFullscreen={false}
        onLoad={handleOnLoad}
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        onBack={handleOnExitFullscreen}
        onEnterFullscreen={handleOnEnterFullscreen}
        onExitFullscreen={handleOnExitFullscreen}
        onProgress={handleOnProgress}
        onSeek={handleOnSeek}
        disableFullscreen={disableControls}
        disablePlayPause={disableControls}
        disableSeekButtons={disableControls}
        disableSeekbar={disableControls}
        disableVolume={disableControls}
        disableTimer={disableControls}
        disableBack={!isFullscreen || disableControls}
        controlAnimationTiming={250}
        controlTimeoutDelay={3000}
        showOnStart={false}
        paused={paused}
        {...props}
      />
    );
  },
);

const VideoPlayer: FC<VideoPlayerProps> = ({
  width,
  height,
  thumb,
  isFullscreen,
  autoplay,
  fullscreenOrientation,
  fullscreenAutorotate,
  disableControlsWhen,
  ...props
}) => {
  const [fullscreen, setFullscreen] = useState<boolean>(isFullscreen ?? false);
  const [paused, setPaused] = useState<boolean>(!autoplay ?? false);
  const {isLandscape} = useScreenOrientation();
  const playerInfo = useRef({
    elapsedSecs: 0,
  });
  const handleFullscreenChanges = () => {
    if (fullscreenAutorotate) {
      const autoFullscreenOnRotateTriggered: boolean =
        isAndroid() &&
        !!fullscreenAutorotate &&
        fullscreenOrientation === 'landscape' &&
        !!isLandscape;
      if (!fullscreen && autoFullscreenOnRotateTriggered) {
        setFullscreen(true);
      } else if (fullscreen && !isLandscape) {
        setFullscreen(false);
      }
    }
  };
  useEffect(() => {
    setPaused(!autoplay);
  }, [autoplay]);
  useEffect(handleFullscreenChanges, [isLandscape]);
  if (fullscreen) {
    StatusBar.setHidden(true);
  } else {
    StatusBar.setHidden(false);
  }
  const disableControls =
    (disableControlsWhen?.fullscreen && fullscreen) ||
    (disableControlsWhen?.default && !fullscreen) ||
    (disableControlsWhen?.fullscreen && disableControlsWhen?.default) ||
    false;
  const RenderedPlayer = (
    <Player
      poster={thumb ?? undefined}
      setPaused={setPaused}
      setFullscreen={setFullscreen}
      isFullscreen={fullscreen}
      playerInfo={playerInfo}
      disableControls={disableControls}
      paused={paused}
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
          transparent={false}
          visible={fullscreen}
          supportedOrientations={['portrait', 'landscape']}>
          <View
            className="h-full"
            pointerEvents={disableControls ? 'none' : undefined}>
            {RenderedPlayer}
          </View>
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
