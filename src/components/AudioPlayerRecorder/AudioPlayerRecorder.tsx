import React, {useCallback, useState} from 'react';
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isAndroid} from '@utils/helpers';

import {AudioPlayerRecorderStateType} from './AudioPlayerRecorder.types';
const BOTTOM_APPBAR_HEIGHT = 80;

const AudioPlayerRecorder = (): JSX.Element => {
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
    ? `${ReactNativeBlobUtil.fs.dirs.CacheDir}/sample.aac`
    : 'sample.aac';

  const onStartRecord = useCallback(async () => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      const secs = Math.floor(e.currentPosition / 1000);
      setState({
        recordSecs: secs,
        recordTime: audioRecorderPlayer.mmss(secs),
      });
    });
    console.log(`uri: ${uri}`);
  }, []);

  const onStopRecord = useCallback(async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setState({
      recordSecs: 0,
    });
    console.log(result);
  }, []);

  const onStartPlay = async () => {
    const msg = await audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      const secs = Math.floor(e.currentPosition / 1000);
      if (e.currentPosition === e.duration) {
        audioRecorderPlayer.stopPlayer();
      }
      setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(Math.floor(secs)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration / 1000)),
      });
    });
  };

  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  console.log(audioRecorderPlayer);

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
        <IconButton
          icon="play"
          iconColor={theme.colors.primary}
          size={30}
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
