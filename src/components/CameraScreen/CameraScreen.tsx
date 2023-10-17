import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Image, Linking, Text, View} from 'react-native';

import {
  Camera,
  TakePhotoOptions,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';

import CaptureButton from './CaptureButton';

const CameraScreen = () => {
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [_hasMicrophonePermission, setHasMicrophonePermission] =
    useState(false);
  const [cameraPosition, _setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );

  // check if camera page is active
  const isFocused = true; // harcoded due to lack of a screen context (Should evaluate from @react-navigation/core's useIsFocused())
  const isForeground = useIsForeground();
  const isActive = isForeground && isFocused;

  const [imageSource, setImageSource] = useState<string>();
  const [flash, _setFlash] = useState<'off' | 'on'>('off');

  const device = useCameraDevice(cameraPosition);

  const {hasPermission, requestPermission} = useCameraPermission();

  const initializeCamera = async function () {
    try {
      !hasPermission && (await requestPermission());
      const permission = await Camera.getCameraPermissionStatus();
      if (permission === 'denied') {
        await Linking.openSettings();
        return;
      }
      setShowCamera(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };

  const takePhotoOptions = useMemo<TakePhotoOptions>(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: flash,
      quality: 90,
      enableShutterSound: true,
    }),
    [flash],
  );

  const capturePhoto = async function () {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto(takePhotoOptions);
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  useEffect(() => {
    initializeCamera();
    Camera.getMicrophonePermissionStatus().then(status =>
      setHasMicrophonePermission(status === 'granted'),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 bg-[black]">
      {showCamera && device ? (
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
          <CaptureButton capturePhoto={capturePhoto} />
        </>
      ) : (
        <>
          {imageSource ? (
            <Image
              source={{uri: `file://${imageSource}`}}
              className="w-full flex-auto"
            />
          ) : (
            <Text>Loading camera...</Text>
          )}
        </>
      )}
    </View>
  );
};

export default CameraScreen;
