import React, {FC, useRef, useState} from 'react';
import {Modal, View} from 'react-native';

import RnmcVideoPlayer from 'react-native-media-console';
import Video from 'react-native-video';

import {PlayerProps, VideoPlayerProps} from './VideoPlayer.d';

export const Player: FC<PlayerProps> = ({
  source,
  isFullscreen,
  setModalVisible,
  playerInfo,
  ...props
}) => {
  const videoRef = useRef<Video | null>(null);
  const handleOnLoadOrPlay = () => {
    if (playerInfo.current.elapsedSecs) {
      videoRef.current?.seek(playerInfo.current.elapsedSecs);
    }
  };
  const handleOnEnterFullscreen = () => {
    playerInfo.current.isFullscreen = true;
    setModalVisible(true);
  };
  const handleOnExitFullscreen = () => {
    playerInfo.current.isFullscreen = false;
    setModalVisible(false);
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
      onEnterFullscreen={handleOnEnterFullscreen}
      onExitFullscreen={handleOnExitFullscreen}
      onProgress={({currentTime}) => {
        playerInfo.current.elapsedSecs = currentTime;
      }}
      disableBack
      {...props}
    />
  );
};

const VideoPlayer: FC<VideoPlayerProps> = ({sourceUri}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const playerInfo = useRef({elapsedSecs: 0, isFullscreen: false});
  return (
    <>
      {modalVisible && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          supportedOrientations={['portrait', 'landscape']}>
          <Player
            source={{
              uri: sourceUri,
            }}
            setModalVisible={setModalVisible}
            isFullscreen={playerInfo.current.isFullscreen}
            playerInfo={playerInfo}
          />
        </Modal>
      )}
      <View className="flex-1 h-[250px]">
        <Player
          source={{
            uri: sourceUri,
          }}
          isFullscreen={playerInfo.current.isFullscreen}
          paused={modalVisible}
          setModalVisible={setModalVisible}
          playerInfo={playerInfo}
        />
      </View>
    </>
  );
};
export default VideoPlayer;
