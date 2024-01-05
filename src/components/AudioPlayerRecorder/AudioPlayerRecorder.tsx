import React, {memo, useCallback, useEffect, useState} from 'react';
import {Image, PermissionsAndroid, Platform, Text, View} from 'react-native';
import tw from 'twrnc';

import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'react-native-blob-util';
import {
  ActivityIndicator,
  Avatar,
  IconButton,
  Portal,
  ProgressBar,
  Snackbar,
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

import {isAndroid} from '../../utils/helpers';

import {
  AudioPlayerRecorderProps,
  AudioPlayerRecorderStateType,
  IsSentEnum,
} from './AudioPlayerRecorder.types';

const BlinkingMicIcon = memo((): JSX.Element => {
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

const BOTTOM_APPBAR_HEIGHT = 20;

export const checkPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
  
      console.log('write external stroage', grants);
  
      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
}

const AudioPlayerRecorder = ({
  fileName = 'nota-audio',
  onSendAudioNote,
  setMuted,
  progressDisplayMode = 'progressBar',
  playTimeDisplayMode = 'default',
  playerInfoElapsedSecs,
  text = 'Hold down the button to record your comment'
}: AudioPlayerRecorderProps): JSX.Element => {
  const [isRecording, setIsRecording] = useState<boolean>();
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const [isSent, setIsSent] = useState<IsSentEnum>(IsSentEnum.Idle);
  const [sendingTime, setSendingTime] = useState<string>();
  const [readyToPlay, setReadyToPlay] = useState<boolean>();
  const [isPlayerEnabled, setIsPlayerEnabled] = useState<boolean>();
  const [isRecorderEnabled, setIsRecorderEnabled] = useState<boolean>();
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [videoTimeInSecsOnRecStarted, setVideoTimeInSecsOnRecStarted] =
    useState<number>(0);
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
  const path = isAndroid()
    ? `${RNFetchBlob.fs.dirs.CacheDir}/${fileName}.m4a`
    : `${fileName}.m4a`;
  const progress = useSharedValue(0);

  const onStartRecord = useCallback(async (): Promise<void> => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    try {
      setMuted?.(true);
      playerInfoElapsedSecs &&
        setVideoTimeInSecsOnRecStarted(playerInfoElapsedSecs());
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
  }, [path]);

  const onStopRecord = useCallback(async (): Promise<void> => {
    try {
      // Stop the recording and see what we've got
      setMuted?.(false);
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
      setMuted?.(true);
      await audioRecorderPlayer.startPlayer(path);
      setIsPlaying(true);
      audioRecorderPlayer.setVolume(1.0);
      audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
        const secs = Math.floor(e.currentPosition / 1000);
        const remainingTime = e.duration - e.currentPosition;
        const remainingTimeInSec = Math.round(remainingTime / 1000);
        const durationInSec = Math.floor(e.duration / 1000);
        if (e.currentPosition === e.duration) {
          audioRecorderPlayer.stopPlayer();
        }
        if (progressDisplayMode === 'progressBar') {
          const x = e.currentPosition / e.duration;
          progress.value = Number(x.toFixed(2));
        }
        setState(prevState => ({
          ...prevState,
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmss(
            playTimeDisplayMode === 'default' ? secs : remainingTimeInSec,
          ),
          duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
        }));

        if (!remainingTime) {
          onStopPlay();
          setState(prevState => ({
            ...prevState,
            currentPositionSec: 0,
            currentDurationSec: 0,
            playTime: audioRecorderPlayer.mmss(
              playTimeDisplayMode === 'default'
                ? durationInSec
                : remainingTimeInSec,
            ),
          }));
        }
      });
    } catch (error) {
      console.error('Oops! Failed to play the recorded note:', error);
    }
  }, [path, progressDisplayMode, playTimeDisplayMode]);

  const onStopPlay = useCallback(async (): Promise<void> => {
    if (isPlaying === false) {
      return;
    }
    try {
      setMuted?.(false);
      await audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
      setIsPlaying(false);
    } catch (error) {
      console.error('Oops! Failed to stop player:', error);
    }
  }, [isPlaying]);

  const onPausePlay = useCallback(async (): Promise<void> => {
    if (isPlaying === false) {
      return;
    }
    try {
      setMuted?.(false);
      await audioRecorderPlayer.pausePlayer();
      setIsPlaying(false);
    } catch (error) {
      console.error('Oops! Failed to pause the recorded note:', error);
    }
  }, [isPlaying]);

  const onDiscardRecord = useCallback(async (): Promise<void> => {
    setIsSent(IsSentEnum.Idle);
    onStopPlay();
    try {
      const fileExists = await RNFetchBlob.fs.exists(path);
      fileExists && RNFetchBlob.fs.unlink(path);
      setIsPlayerEnabled(false);
      setReadyToPlay(false);
    } catch (error) {
      console.error('Oops! Failed to remove the recorded note:', error);
    }
  }, [path]);

  const onSendAudio = useCallback(async () => {
    setIsSent(IsSentEnum.Sending);
    try {
      const fileExists = await RNFetchBlob.fs.exists(path);
      const fileContent = await RNFetchBlob.fs.readFile(path, 'base64');
      const res =
        fileExists &&
        fileContent &&
        (await onSendAudioNote(
          fileName,
          undefined,
          fileContent,
          videoTimeInSecsOnRecStarted,
        ));
      if (res) {
        setIsSent(IsSentEnum.Sent);
        const date = new Date(Date.now());
        const formatted = date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        setSendingTime(formatted);
      }
    } catch (error) {
      setIsSent(IsSentEnum.Error);
      console.error(error);
    }
  }, [path, onSendAudioNote, videoTimeInSecsOnRecStarted]);

  useEffect(() => {
    checkPermissions()
    return () => {
      // remove file from cache by specifying a path
      RNFetchBlob.fs.exists(path).then(exist => {
        if (exist) {
          RNFetchBlob.fs.unlink(path);
        }
      });
    };
  }, []);

  useEffect(() => {
    !readyToPlay && isPlayerEnabled && setIsPlayerEnabled(false);
    readyToPlay &&
      RNFetchBlob.fs
        .exists(path)
        .then(exist => {
          return new Promise((resolve, reject) => {
            if (exist) {
              resolve(RNFetchBlob.fs.readFile(path, 'base64'));
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
        .catch(error => console.error(`Error: ${error.message}`));
  }, [readyToPlay]);

  useEffect(() => {
    if (isRecording) {
      setIsRecorderEnabled(true);
    }
  }, [isRecording]);

  const playTimeClassName =
    progressDisplayMode === 'progressBar'
      ? 'absolute left-1 top-4'
      : 'absolute left-1 top-10';

  const sendingTimeClassName =
    progressDisplayMode === 'progressBar'
      ? 'absolute right-1 top-4'
      : 'absolute right-0 top-10';

  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <>
      <View
        style={tw`absolute left-0 right-0 bottom-0 flex-row items-center p-4 h-[${
          BOTTOM_APPBAR_HEIGHT + bottom
        }] bg-[#ffff]`}>
        <View style={tw`flex-auto flex-row items-center`}>
          {isPlayerEnabled ? (
            <>
              {isSent !== IsSentEnum.Error && isSent !== IsSentEnum.Sending ? (
                <IconButton
                  icon={isPlaying ? 'pause' : 'play'}
                  iconColor={theme.colors.primary}
                  size={25}
                  onPress={
                    isPlaying ? () => onPausePlay() : () => onStartPlay()
                  }
                />
              ) : (
                <IconButton
                  icon={'upload'}
                  iconColor={theme.colors.primary}
                  size={25}
                  onPress={onSendAudio}
                />
              )}
              <View style={tw`flex-1 p-1`}>
                {progressDisplayMode === 'progressBar' ? (
                  <ProgressBar
                    style={tw`w-full`}
                    progress={progress.value}
                    color={theme.colors.primary}
                  />
                ) : (
                  <Image
                    style={tw`flex-1 w-full`}
                    source={require('../../assets/img/soundwaves.png')}
                  />
                )}
                <Text style={tw`${playTimeClassName} font-normal`}>
                  {state.playTime}
                </Text>
                {sendingTime && (
                  <Text
                    style={tw`${sendingTimeClassName} font-normal`}>
                    {sendingTime}
                  </Text>
                )}
              </View>
              {(isSent === IsSentEnum.Idle || isSent === IsSentEnum.Error) && (
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
                <IconButton
                  icon={() => (
                    <ActivityIndicator
                      animating={true}
                      size={20}
                      color={theme.colors.secondary}
                    />
                  )}
                  size={25}
                />
              )}
              {isSent === IsSentEnum.Error && (
                <IconButton
                  icon="alert-circle-outline"
                  iconColor={theme.colors.error}
                  size={25}
                  onPress={() => {
                    setSnackbarVisible(true);
                  }}
                />
              )}
            </>
          ) : (
            <>
              {isRecorderEnabled ? (
                <>
                  <BlinkingMicIcon />
                  <Text style={tw`flex-1`}>
                    {state.recordTime}
                  </Text>
                </>
              ) : (
                <Text style={tw`flex-1`}>
                  {text}
                </Text>
              )}
            </>
          )}
        </View>
        <View style={tw`flex-auto items-center`}>
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
      <Portal>
        <Snackbar
          icon="close-circle"
          duration={3000}
          style={{backgroundColor: 'rgba(186, 26, 26, 0.9)'}}
          visible={snackbarVisible}
          onIconPress={() => setSnackbarVisible(false)}
          onDismiss={() => {}}>
          An error has occurred during the file transfer.
        </Snackbar>
      </Portal>
    </>
  );
};

export default AudioPlayerRecorder;
