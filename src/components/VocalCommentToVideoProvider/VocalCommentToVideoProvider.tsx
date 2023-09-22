import React, {useState} from 'react';
import {View} from 'react-native';
import {Platform} from 'react-native';

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
import {Appbar, IconButton, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {VideoPlayer} from '@components/VideoPlayer';

import {
  ActionsBarStateType,
  VocalCommentToVideoProviderProps,
} from './VocalCommentToVideoProvider.types';

const BOTTOM_APPBAR_HEIGHT = 80;

const ActionsBar = (): JSX.Element => {
  const [state, setState] = useState<ActionsBarStateType>({
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
  });

  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.09);
  const path =
    Platform.OS === 'android'
      ? `${ReactNativeBlobUtil.fs.dirs.CacheDir}/sample.aac`
      : 'sample.aac';

  const onStartRecord = async () => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      setState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
    });
    console.log(`uri: ${uri}`);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }
      setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      className="absolute left-0 right-0 bottom-0"
      style={[
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
        },
      ]}
      safeAreaInsets={{bottom}}>
      <Appbar.Content
        // title="Press and hold the button to start recording"
        title={state.recordTime || state.playTime || ''}
        titleStyle={{fontSize: 15, color: theme.colors.onSecondaryContainer}}
      />
      <IconButton
        className="mr-1"
        icon="microphone"
        mode="contained"
        iconColor={theme.colors.onPrimary}
        containerColor={theme.colors.primary}
        size={20}
        onLongPress={() => onStartRecord()}
        onPressOut={() => onStopRecord()}
      />
      <IconButton
        className="mr-3"
        icon="play"
        mode="contained"
        iconColor={theme.colors.onPrimary}
        containerColor={theme.colors.primary}
        size={20}
        onPress={() => onStartPlay()}
      />
    </Appbar>
  );
};

const VocalCommentToVideoProvider = ({
  video,
}: VocalCommentToVideoProviderProps) => {
  return (
    <>
      <View className="flex-1" style={{marginBottom: BOTTOM_APPBAR_HEIGHT}}>
        <VideoPlayer {...video} />
      </View>
      <ActionsBar />
    </>
  );
};

export default VocalCommentToVideoProvider;
