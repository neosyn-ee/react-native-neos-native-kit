import React, {memo, useCallback, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {IconButton, useTheme} from 'react-native-paper';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isAndroid} from '@utils/helpers';

import {AudioPlayerRecorderStateType} from './AudioPlayerRecorder.types';

const BlinkingMicIcon = memo(() => {
  const opacity = useSharedValue(0);

  // Set the opacity value to animate between 0 and 1
  opacity.value = withRepeat(
    withTiming(1, {duration: 100, easing: Easing.ease}),
    -1,
    true,
  );
  const theme = useTheme();
  const style = useAnimatedStyle(() => ({opacity: opacity.value}), []);

  return (
    <Animated.View style={style}>
      <IconButton icon="microphone" iconColor={theme.colors.error} size={25} />
    </Animated.View>
  );
});

const BOTTOM_APPBAR_HEIGHT = 80;
const FS = ReactNativeBlobUtil.fs;

const AudioPlayerRecorder = (): JSX.Element => {
  const [isRecording, setIsRecording] = useState<boolean>();
  const [readyToPlay, setReadyToPlay] = useState<boolean>();
  const [isPlayerEnabled, setIsPlayerEnabled] = useState<boolean>();
  const [isRecorderEnabled, setIsRecorderEnabled] = useState<boolean>();
  const [state, setState] = useState<AudioPlayerRecorderStateType>({
    recordSecs: 0,
    recordTime: '00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00',
    duration: '00:00',
  });

  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.09);
  const path = isAndroid() ? `${FS.dirs.CacheDir}/sound.m4a` : 'sound.m4a';

  const onStartRecord = useCallback(async () => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    try {
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      setIsRecording(true);
      audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        const secs = Math.floor(e.currentPosition / 1000);
        setState({
          ...state,
          recordSecs: secs,
          recordTime: audioRecorderPlayer.mmss(secs),
        });
      });
      console.log(`uri: ${uri}`);
    } catch (error) {
      console.error('Oops! Failed to start recording:', error);
    }
  }, []);

  const onStopRecord = useCallback(async () => {
    try {
      // Stop the recording and see what we've got
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setIsRecording(false);
      setReadyToPlay(true);
      setState({
        ...state,
        recordSecs: 0,
      });
      console.log(result);
    } catch (error) {
      console.error('Oops! Failed to stop recording:', error);
    }
  }, []);

  const onStartPlay = async () => {
    const result = await audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);
    console.log(result);
    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      const secs = Math.floor(e.currentPosition / 1000);
      if (e.currentPosition === e.duration) {
        audioRecorderPlayer.stopPlayer();
      }
      setState({
        ...state,
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(Math.floor(secs)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration / 1000)),
      });
    });
  };

  useEffect(() => {
    readyToPlay &&
      FS.exists(path)
        .then(exist => {
          return new Promise((resolve, reject) => {
            if (exist) {
              resolve(FS.readFile(path, 'base64'));
            } else {
              const error = new Error("File doesn't exist");
              reject(error);
            }
          });
        })
        .then(data => {
          data && setIsPlayerEnabled(true);
        })
        .catch(error => console.log(`Error: ${error.message}`));

    return () => {
      // remove file from cache by specifying a path
      readyToPlay &&
        FS.exists(path).then(exist => {
          if (exist) {
            FS.unlink(path);
          }
        });
    };
  }, [readyToPlay]);

  useEffect(() => {
    setIsPlayerEnabled(!isRecording);
    setIsRecorderEnabled(isRecording);
  }, [isRecording]);

  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View
      className="absolute left-0 right-0 bottom-0 flex-row items-center p-4"
      style={[
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
        },
      ]}>
      <View className="flex-auto flex-row items-center">
        {isPlayerEnabled ? (
          <>
            <IconButton
              icon={
                state.currentPositionSec &&
                state.currentPositionSec !== state.currentDurationSec
                  ? 'pause'
                  : 'play'
              }
              iconColor={theme.colors.primary}
              size={25}
              onPress={() => onStartPlay()}
            />
            <View className="flex-column">
              <Image
                className="flex-1 w-[200px]"
                source={require('@assets/img/soundwaves.png')}
              />
              <Text
                className="absolute left-0 top-10"
                style={{
                  fontSize: 13,
                  color: theme.colors.onSecondaryContainer,
                }}>
                {state.playTime || ''}
              </Text>
            </View>
          </>
        ) : (
          <>
            {isRecorderEnabled ? (
              <>
                <BlinkingMicIcon />
                <Text
                  className="flex-1"
                  style={{
                    fontSize: 13,
                    color: theme.colors.onSecondaryContainer,
                  }}>
                  {state.recordTime}
                </Text>
              </>
            ) : (
              <Text
                className="flex-1"
                style={{
                  fontSize: 13,
                  color: theme.colors.onSecondaryContainer,
                }}>
                Hold down the button to record your comment
              </Text>
            )}
          </>
        )}
      </View>
      <View className="flex-auto items-center">
        <IconButton
          icon="microphone"
          mode="contained"
          iconColor={theme.colors.onPrimary}
          containerColor={theme.colors.primary}
          size={20}
          onLongPress={() => onStartRecord()}
          onPressOut={() => onStopRecord()}
        />
      </View>
    </View>
  );
};

export default AudioPlayerRecorder;
