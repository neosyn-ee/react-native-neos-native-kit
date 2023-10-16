import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';

const CameraScreen = () => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setCameraInitialized] = useState(false);
  const [_hasMicrophonePermission, setHasMicrophonePermission] =
    useState(false);
  const [cameraPosition, _setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );

  // check if camera page is active
  const isFocused = true; // harcoded due to lack of a screen context (Should evaluate from @react-navigation/core's useIsFocused())
  const isForeground = useIsForeground();
  const isActive = isForeground && isFocused;

  const device = useCameraDevice(cameraPosition);
  const shouldShowCamera = isCameraInitialized && device;

  const {hasPermission, requestPermission} = useCameraPermission();

  const initializeCamera = async function () {
    try {
      !hasPermission && (await requestPermission());
      setCameraInitialized(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
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
      {shouldShowCamera ? (
        <Camera
          ref={camera}
          className="flex-1"
          isActive={isActive}
          device={device}
          video={true}
          audio={true}
        />
      ) : (
        <Text>Loading camera...</Text>
      )}
    </View>
  );
};

export default CameraScreen;
