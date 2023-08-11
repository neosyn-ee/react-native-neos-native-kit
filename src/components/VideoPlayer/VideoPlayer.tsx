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
  const onLoadOrPlay = () => {
    if (playerInfo.current.elapsedSecs) {
      videoRef.current?.seek(playerInfo.current.elapsedSecs);
    }
  };
  return (
    <RnmcVideoPlayer
      videoRef={videoRef}
      className={isFullscreen ? 'h-screen' : 'h-full'}
      source={source}
      isFullscreen={isFullscreen}
      resizeMode="contain"
      toggleResizeModeOnFullscreen={false}
      onPlay={onLoadOrPlay}
      onLoad={onLoadOrPlay}
      onEnterFullscreen={() => {
        setModalVisible(true);
      }}
      onExitFullscreen={() => {
        setModalVisible(false);
      }}
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
  const playerInfo = useRef({elapsedSecs: 0});
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
            isFullscreen={true}
            playerInfo={playerInfo}
          />
        </Modal>
      )}
      <View className="flex-1 h-[250px]">
        <Player
          source={{
            uri: sourceUri,
          }}
          isFullscreen={false}
          paused={modalVisible}
          setModalVisible={setModalVisible}
          playerInfo={playerInfo}
        />
      </View>
    </>
  );
};
export default VideoPlayer;
