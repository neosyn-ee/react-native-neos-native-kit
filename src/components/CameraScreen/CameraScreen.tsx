import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraScreen = () => {
  const [isCameraInitialized, setCameraInitialized] = useState(false);
  const device = useCameraDevice('back');
  const {requestPermission} = useCameraPermission();

  const initializeCamera = async function () {
    try {
      await requestPermission();
      await Camera.getCameraPermissionStatus();
      await Camera.getMicrophonePermissionStatus();
      setCameraInitialized(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };

  useEffect(() => {
    initializeCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1">
      {isCameraInitialized ? (
        <Camera className="flex-1" isActive={true} device={device!} />
      ) : (
        <Text>Loading camera...</Text>
      )}
    </View>
  );
};

export default CameraScreen;
