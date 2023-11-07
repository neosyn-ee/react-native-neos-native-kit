import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';

import {IconButton} from 'react-native-paper';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {
  Camera,
  CameraRuntimeError,
  Code,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
  useMicrophonePermission,
} from 'react-native-vision-camera';

import {useIsForeground} from '@hooks/useIsForeground';
import {SAFE_AREA_PADDING} from '@utils/constants';

import {CameraScreenProps, onMediaCapturedCallback} from './CameraScreen.types';
import {CaptureButton} from './CaptureButton';

import {DEFAULT_CAMERA_FORMAT_FILTERS} from '.';

const AnimatedCamera = Animated.createAnimatedComponent(Camera);

const CameraScreen = ({
  formatFilters = DEFAULT_CAMERA_FORMAT_FILTERS,
  recordingMode = 'photo',
  onMediaCaptured: _onMediaCaptured,
  onCodeScanned: _onCodeScanned,
  stopOnFirstCodeScan = true,
}: CameraScreenProps) => {
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
  const [scannedValue, setScannedValue] = useState<string>();

  const device = useCameraDevice(cameraPosition);

  const format = useCameraFormat(device, formatFilters);

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

  // # start region Callbacks
  const onCodeScanned = useCallback(
    (codes: Code[]) => {
      const code = codes.find(cod => !!cod.value);
      if (_onCodeScanned) {
        if (stopOnFirstCodeScan && !scannedValue) {
          code?.value && _onCodeScanned(code.value);
          setScannedValue(code?.value);
        } else if (!stopOnFirstCodeScan) {
          code?.value && _onCodeScanned(code.value);
        }
      }
    },
    [_onCodeScanned, stopOnFirstCodeScan, scannedValue],
  );

  const setIsPressingButton = useCallback(
    (pressed: boolean) => {
      isPressingButton.value = pressed;
    },
    [isPressingButton],
  );

  const initializeCamera = async function () {
    const needsMicPermission: boolean =
      recordingMode === 'video' || recordingMode === 'combined';
    try {
      !hasCameraPermission && (await requestCameraPermission());
      !hasMicPermission && needsMicPermission && (await requestMicPermission());
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const micPermission = needsMicPermission
        ? await Camera.getMicrophonePermissionStatus()
        : undefined;
      if (cameraPermission === 'denied' || micPermission === 'denied') {
        await Linking.openSettings();
        return;
      }
      setIsCameraInitialized(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };
  // # end region Callbacks

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned,
  });

  // #start region Camera callbacks
  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const onMediaCaptured = useCallback<onMediaCapturedCallback>(
    media => {
      _onMediaCaptured && _onMediaCaptured(media);
    },
    [_onMediaCaptured],
  );

  const onFlashPressed = useCallback(() => {
    setFlash(f => (f === 'off' ? 'on' : 'off'));
  }, []);
  // #end region Camera callbacks

  useEffect(() => {
    initializeCamera();
    Camera.getMicrophonePermissionStatus().then(status =>
      setHasMicrophonePermission(status === 'granted'),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 bg-[#000000]">
      {isCameraInitialized && device && (
        <>
          <AnimatedCamera
            ref={camera}
            className="flex-1 relative"
            orientation="portrait"
            onError={onError}
            isActive={isActive}
            device={device}
            format={format}
            hdr={enableHdr}
            photo={recordingMode !== 'scanner'}
            video={recordingMode !== 'scanner'}
            audio={hasMicrophonePermission}
            codeScanner={recordingMode === 'scanner' ? codeScanner : undefined}
          />
          {recordingMode !== 'scanner' && (
            <CaptureButton
              flash={supportsFlash ? flash : 'off'}
              camera={camera}
              onMediaCaptured={onMediaCaptured}
              setIsPressingButton={setIsPressingButton}
              enabled={isCameraInitialized && isActive}
              recordingMode={recordingMode}
            />
          )}
          <View style={styles.rightButtonRow}>
            {recordingMode !== 'scanner' && (
              <IconButton
                icon="camera-flip"
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={onFlipCameraPressed}
              />
            )}
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
            {supportsHdr && recordingMode !== 'scanner' && (
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
