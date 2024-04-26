import {FC} from 'react';

import {AudioPlayerRecorder} from '../components/AudioPlayerRecorder';
import {onSendAudioNote} from '../components/VideoAudioComment';

const AudioScreen: FC = () => {
  return <AudioPlayerRecorder onSendAudioNote={onSendAudioNote} />;
};

export default AudioScreen;
