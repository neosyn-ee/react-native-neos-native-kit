import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';

import {IconButton} from 'react-native-paper';
import {useSharedValue} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
  useMicrophonePermission,
  VideoFile,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';
import {SAFE_AREA_PADDING} from '@utils/constants';

import {CaptureButton} from './CaptureButton';

const CameraScreen = () => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );

  const isPressingButton = useSharedValue(false);

  // check if camera page is active
  const isFocused = true; // harcoded due to lack of a screen context (Should evaluate from @react-navigation/core's useIsFocused())
  const isForeground = useIsForeground();
  const isActive = isForeground && isFocused;

  const [flash, _setFlash] = useState<'off' | 'on'>('off');

  const device = useCameraDevice(cameraPosition);

  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: hasMicPermission,
    requestPermission: requestMicPermission,
  } = useMicrophonePermission();

  //#region Callbacks
  const setIsPressingButton = useCallback(
    (pressed: boolean) => {
      isPressingButton.value = pressed;
    },
    [isPressingButton],
  );

  const initializeCamera = async function () {
    try {
      !hasCameraPermission && (await requestCameraPermission());
      !hasMicPermission && (await requestMicPermission());
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const micPermission = await Camera.getMicrophonePermissionStatus();
      if (cameraPermission === 'denied' || micPermission === 'denied') {
        await Linking.openSettings();
        return;
      }
      setIsCameraInitialized(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, _type: 'photo' | 'video') => {
      console.log(`Media captured! ${JSON.stringify(media)}`);
    },
    [],
  );

  useEffect(() => {
    initializeCamera();
    Camera.getMicrophonePermissionStatus().then(status =>
      setHasMicrophonePermission(status === 'granted'),
    );
  }, []);

  return (
    <View className="flex-1 bg-[black]">
      {isCameraInitialized && device && (
        <>
          <Camera
            ref={camera}
            className="flex-1"
            orientation="portrait"
            isActive={isActive}
            device={device}
            photo={true}
            video={true}
            audio={hasMicrophonePermission}
          />
          <CaptureButton
            flash={flash}
            camera={camera}
            onMediaCaptured={onMediaCaptured}
            setIsPressingButton={setIsPressingButton}
            enabled={isCameraInitialized && isActive}
          />
          <SafeAreaView style={styles.rightButtonRow}>
            <IconButton
              icon="camera-flip"
              iconColor="white"
              containerColor="rgba(140, 140, 140, 0.3)"
              mode="outlined"
              size={25}
              onPress={onFlipCameraPressed}
            />
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rightButtonRow: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: SAFE_AREA_PADDING.paddingRight,
    top: SAFE_AREA_PADDING.paddingTop,
  },
});

export default CameraScreen;
