import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {VideoPlayer} from '@components/VideoPlayer';
import {SAFE_AREA_PADDING} from '@utils/constants';

import {MediaScreenProps} from './MediaScreen.types';

const MediaScreen = ({media, type}: MediaScreenProps) => {
  const {path} = media;

  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      {type === 'photo' && (
        <Image
          className="flex-1"
          source={{uri: `file://${path}`}}
          resizeMode="cover"
        />
      )}
      {type === 'video' && (
        <VideoPlayer source={{uri: `file://${path}`}} height="100%" />
      )}
      <IconButton
        style={styles.closeButton}
        icon="close"
        iconColor="white"
        size={30}
        onPress={() => console.log('close button pressed')}
      />
      <IconButton
        style={styles.saveButton}
        icon="folder-download"
        iconColor="white"
        size={30}
        onPress={() => console.log('save button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: SAFE_AREA_PADDING.paddingTop,
    left: SAFE_AREA_PADDING.paddingLeft,
  },
  saveButton: {
    position: 'absolute',
    bottom: SAFE_AREA_PADDING.paddingBottom,
    left: SAFE_AREA_PADDING.paddingLeft,
  },
});

export default MediaScreen;
