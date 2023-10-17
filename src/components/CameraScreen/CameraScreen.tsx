import React, {useEffect, useRef, useState} from 'react';
import {Linking, Text, View} from 'react-native';

import {
  Camera,
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

  const [_imageSource, setImageSource] = useState<string | undefined>();
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

  const capturePhoto = async function () {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({flash});
      setImageSource(photo.path);
      // setShowCamera(false);
      console.log(photo.path);
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
            isActive={isActive}
            device={device}
            photo={true}
            video={true}
            audio={true}
          />
          <CaptureButton capturePhoto={capturePhoto} />
        </>
      ) : (
        <Text>Loading camera...</Text>
      )}
    </View>
  );
};

export default CameraScreen;
