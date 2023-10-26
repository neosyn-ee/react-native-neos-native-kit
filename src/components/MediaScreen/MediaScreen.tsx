import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  ImageLoadEventData,
  NativeSyntheticEvent,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoadError, OnLoadData} from 'react-native-video';

import {VideoPlayer} from '@components/VideoPlayer';
import {SAFE_AREA_PADDING} from '@utils/constants';
import {isAndroid} from '@utils/helpers';

import {MediaScreenProps} from './MediaScreen.types';

const requestSavePermission = async (): Promise<boolean> => {
  if (isAndroid()) {
    return true;
  }

  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  if (permission == null) {
    return false;
  }
  let hasPermission = await PermissionsAndroid.check(permission);
  if (!hasPermission) {
    const permissionRequestResult = await PermissionsAndroid.request(
      permission,
    );
    hasPermission = permissionRequestResult === 'granted';
  }
  return hasPermission;
};

const isVideoOnLoadEvent = (
  event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>,
): event is OnLoadData => 'duration' in event && 'naturalSize' in event;

const MediaScreen = ({media, type}: MediaScreenProps) => {
  const {path} = media;

  const [_savingState, setSavingState] = useState<'none' | 'saving' | 'saved'>(
    'none',
  );

  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  const onMediaLoad = useCallback(
    (event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>) => {
      if (isVideoOnLoadEvent(event)) {
        console.log(
          `Video loaded. Size: ${event.naturalSize.width}x${event.naturalSize.height} (${event.naturalSize.orientation}, ${event.duration} seconds)`,
        );
      } else {
        console.log(
          `Image loaded. Size: ${event.nativeEvent.source.width}x${event.nativeEvent.source.height}`,
        );
      }
    },
    [],
  );

  const onMediaLoadError = useCallback((error: LoadError) => {
    console.log(`failed to load media: ${JSON.stringify(error)}`);
  }, []);

  const onSavePressed = useCallback(async () => {
    try {
      setSavingState('saving');

      const hasPermission = await requestSavePermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission denied!',
          'Vision Camera does not have permission to save the media to your camera roll.',
        );
        return;
      }
      await CameraRoll.save(`file://${path}`, {
        type: type,
      });
      setSavingState('saved');
    } catch (e) {
      const message = e instanceof Error ? e.message : JSON.stringify(e);
      setSavingState('none');
      Alert.alert(
        'Failed to save!',
        `An unexpected error occured while trying to save your ${type}. ${message}`,
      );
    }
  }, [path, type]);

  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      {type === 'photo' && (
        <Image
          className="flex-1"
          source={source}
          resizeMode="cover"
          onLoad={onMediaLoad}
        />
      )}
      {type === 'video' && (
        <VideoPlayer
          source={source}
          height="100%"
          onLoad={onMediaLoad}
          showOnStart={true}
          alwaysShowControls={true}
          controlAnimationTiming={0}
          disableBack={true}
          disableVolume={true}
          disableFullscreen={true}
          disableSeekButtons={true}
          onError={onMediaLoadError}
          disableOverlay
        />
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
        onPress={onSavePressed}
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
    top: SAFE_AREA_PADDING.paddingTop,
    right: SAFE_AREA_PADDING.paddingRight,
  },
});

export default MediaScreen;
