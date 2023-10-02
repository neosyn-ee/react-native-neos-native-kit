/* eslint-disable react-native/no-inline-styles */
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
import {
  ActivityIndicator,
  Avatar,
  IconButton,
  useTheme,
} from 'react-native-paper';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isAndroid} from '@utils/helpers';

import {
  AudioPlayerRecorderProps,
  AudioPlayerRecorderStateType,
  IsSentEnum,
} from './AudioPlayerRecorder.types';

const BlinkingMicIcon = memo(() => {
  const opacity = useSharedValue(0);

  // Set the opacity value to animate between 0 and 1
  opacity.value = withRepeat(
    withTiming(1, {duration: 700, easing: Easing.ease}),
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

const AudioPlayerRecorder = ({
  onSendAudioNote,
}: AudioPlayerRecorderProps): JSX.Element => {
  const [isRecording, setIsRecording] = useState<boolean>();
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const [isSent, setIsSent] = useState<IsSentEnum>(IsSentEnum.Idle);
  const [sendingTime, setSendingTime] = useState<string>();
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

  const onStartRecord = useCallback(async (): Promise<void> => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    try {
      await audioRecorderPlayer.startRecorder(path, audioSet);
      setIsRecording(true);
      setReadyToPlay(false);
      audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        const secs = Math.floor(e.currentPosition / 1000);
        setState(prevState => ({
          ...prevState,
          recordSecs: secs,
          recordTime: audioRecorderPlayer.mmss(secs),
        }));
      });
    } catch (error) {
      console.error('Oops! Failed to start recording:', error);
    }
  }, []);

  const onStopRecord = useCallback(async (): Promise<void> => {
    try {
      // Stop the recording and see what we've got
      await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setIsRecording(false);
      setReadyToPlay(true);
      setState(prevState => ({
        ...prevState,
        recordSecs: 0,
        playTime: prevState.recordSecs
          ? audioRecorderPlayer.mmss(prevState.recordSecs)
          : '00:00',
      }));
    } catch (error) {
      console.error('Oops! Failed to stop recording:', error);
    }
  }, []);

  const onStartPlay = useCallback(async () => {
    if (isPlaying) {
      return;
    }
    try {
      await audioRecorderPlayer.startPlayer(path);
      setIsPlaying(true);
      audioRecorderPlayer.setVolume(1.0);
      audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
        const secs = Math.floor(e.currentPosition / 1000);
        if (e.currentPosition === e.duration) {
          audioRecorderPlayer.stopPlayer();
        }
        setState(prevState => ({
          ...prevState,
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmss(secs),
          duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
        }));

        if (e.currentPosition === e.duration) {
          onStopPlay();
          setState(prevState => ({
            ...prevState,
            currentPositionSec: 0,
            currentDurationSec: 0,
            playTime: prevState.currentDurationSec
              ? audioRecorderPlayer.mmss(
                  Math.floor(prevState.currentDurationSec / 1000),
                )
              : '00:00',
          }));
        }
      });
    } catch (error) {
      console.error('Oops! Failed to play the recorded note:', error);
    }
  }, []);

  const onStopPlay = useCallback(async (): Promise<void> => {
    if (isPlaying === false) {
      return;
    }
    try {
      await audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
      setIsPlaying(false);
    } catch (error) {
      console.error('Oops! Failed to stop player:', error);
    }
  }, []);

  const onPausePlay = useCallback(async (): Promise<void> => {
    if (isPlaying === false) {
      return;
    }
    try {
      await audioRecorderPlayer.pausePlayer();
      setIsPlaying(false);
    } catch (error) {
      console.error('Oops! Failed to pause the recorded note:', error);
    }
  }, []);

  const onDiscardRecord = useCallback(async (): Promise<void> => {
    onStopPlay();
    try {
      const fileExists = await FS.exists(path);
      fileExists && FS.unlink(path);
      setIsPlayerEnabled(false);
      setReadyToPlay(false);
    } catch (error) {
      console.error('Oops! Failed to remove the recorded note:', error);
    }
  }, []);

  const onSendAudio = useCallback(async () => {
    setIsSent(IsSentEnum.Sending);
    try {
      await onSendAudioNote();
      setIsSent(IsSentEnum.Sent);
      const date = new Date(Date.now());
      const formatted = `${date.getHours()}:${date.getMinutes()}`;
      setSendingTime(formatted);
    } catch (error) {
      setIsSent(IsSentEnum.Error);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    return () => {
      // remove file from cache by specifying a path
      FS.exists(path).then(exist => {
        if (exist) {
          FS.unlink(path);
        }
      });
    };
  }, []);

  useEffect(() => {
    !readyToPlay && isPlayerEnabled && setIsPlayerEnabled(false);
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
          if (data) {
            setIsRecorderEnabled(false);
            setIsPlayerEnabled(true);
          }
        })
        .catch(error => console.log(`Error: ${error.message}`));
  }, [readyToPlay]);

  useEffect(() => {
    if (isRecording) {
      setIsRecorderEnabled(true);
    }
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
              icon={isPlaying ? 'pause' : 'play'}
              iconColor={theme.colors.primary}
              size={25}
              onPress={isPlaying ? () => onPausePlay() : () => onStartPlay()}
            />
            <View className="flex-column">
              <Image
                className="flex-1 w-[175px]"
                source={require('@assets/img/soundwaves.png')}
              />
              <Text
                className="absolute left-0 top-10"
                style={{
                  fontSize: 13,
                  color: theme.colors.onSecondaryContainer,
                }}>
                {state.playTime}
              </Text>
              {sendingTime && (
                <Text
                  className="absolute right-0 top-10"
                  style={{
                    fontSize: 13,
                    color: theme.colors.onSecondaryContainer,
                  }}>
                  {sendingTime}
                </Text>
              )}
            </View>
            {isSent === IsSentEnum.Idle && (
              <IconButton
                icon="trash-can-outline"
                iconColor={theme.colors.error}
                size={25}
                onPress={() => onDiscardRecord()}
              />
            )}
            {isSent === IsSentEnum.Sent && (
              <IconButton icon="check-circle" iconColor="#50C878" size={25} />
            )}
            {isSent === IsSentEnum.Sending && (
              <ActivityIndicator
                className="p-4"
                animating={true}
                size={20}
                color={theme.colors.secondary}
              />
            )}
            {isSent === IsSentEnum.Error && (
              <IconButton
                icon="alert-circle-outline"
                iconColor={theme.colors.error}
                size={25}
              />
            )}
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
        {isSent === IsSentEnum.Idle ? (
          <IconButton
            icon={readyToPlay ? 'send' : 'microphone'}
            mode="contained"
            iconColor={theme.colors.onPrimary}
            containerColor={theme.colors.primary}
            size={20}
            onPress={readyToPlay ? () => onSendAudio() : undefined}
            onLongPress={readyToPlay ? undefined : () => onStartRecord()}
            onPressOut={
              readyToPlay || !isRecording ? undefined : () => onStopRecord()
            }
          />
        ) : (
          <Avatar.Text size={35} label="FD" />
        )}
      </View>
    </View>
  );
};

export default AudioPlayerRecorder;
