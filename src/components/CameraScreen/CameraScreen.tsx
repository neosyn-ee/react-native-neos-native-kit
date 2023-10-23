import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, Text, View} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
  useMicrophonePermission,
  VideoFile,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';

import {CaptureButton} from './CaptureButton';

const CameraScreen = () => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const [_hasMicrophonePermission, setHasMicrophonePermission] =
    useState(false);
  const [cameraPosition, _setCameraPosition] = useState<'front' | 'back'>(
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
    (_isPressingButton: boolean) => {
      isPressingButton.value = _isPressingButton;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View className="flex-1 bg-[black]">
        {isCameraInitialized && device ? (
          <>
            <Camera
              ref={camera}
              className="flex-1"
              orientation="portrait"
              isActive={isActive}
              device={device}
              photo={true}
              video={true}
              audio={true}
            />
            <CaptureButton
              flash={flash}
              camera={camera}
              onMediaCaptured={onMediaCaptured}
              setIsPressingButton={setIsPressingButton}
              enabled={isCameraInitialized && isActive}
            />
          </>
        ) : (
          <Text>Loading camera...</Text>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default CameraScreen;
