import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';

import {IconButton} from 'react-native-paper';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {
  Camera,
  CameraRuntimeError,
  PhotoFile,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useMicrophonePermission,
  VideoFile,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';
import {SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH} from '@utils/constants';

import {CaptureButton} from './CaptureButton';

const AnimatedCamera = Animated.createAnimatedComponent(Camera);

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

  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [enableHdr, setEnableHdr] = useState(false);

  const device = useCameraDevice(cameraPosition);

  const screenAspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
  const format = useCameraFormat(device, [
    {photoHDR: true},
    {videoHDR: true},
    {videoAspectRatio: screenAspectRatio},
    {videoResolution: 'max'},
    {photoAspectRatio: screenAspectRatio},
    {photoResolution: 'max'},
  ]);

  const supportsFlash = device?.hasFlash ?? false;
  const supportsHdr = format?.supportsPhotoHDR && format?.supportsVideoHDR;

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

  // Camera callbacks
  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, _type: 'photo' | 'video') => {
      console.log(`Media captured! ${JSON.stringify(media)}`);
    },
    [],
  );

  const onFlashPressed = useCallback(() => {
    setFlash(f => (f === 'off' ? 'on' : 'off'));
  }, []);
  //#endregion

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
          <AnimatedCamera
            ref={camera}
            className="flex-1"
            orientation="portrait"
            onError={onError}
            isActive={isActive}
            device={device}
            format={format}
            hdr={enableHdr}
            photo={true}
            video={true}
            audio={hasMicrophonePermission}
          />
          <CaptureButton
            flash={supportsFlash ? flash : 'off'}
            camera={camera}
            onMediaCaptured={onMediaCaptured}
            setIsPressingButton={setIsPressingButton}
            enabled={isCameraInitialized && isActive}
          />
          <View style={styles.rightButtonRow}>
            <IconButton
              icon="camera-flip"
              iconColor="white"
              containerColor="rgba(140, 140, 140, 0.3)"
              mode="outlined"
              size={25}
              onPress={onFlipCameraPressed}
            />
            {supportsFlash && (
              <IconButton
                className="mt-3"
                icon={flash === 'off' ? 'flash-off' : 'flash'}
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={onFlashPressed}
              />
            )}
            {supportsHdr && (
              <IconButton
                className="mt-3"
                icon={enableHdr ? 'hdr' : 'hdr-off'}
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={() => setEnableHdr(h => !h)}
              />
            )}
          </View>
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
