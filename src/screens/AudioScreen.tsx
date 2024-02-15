import { AudioPlayerRecorder } from "../components/AudioPlayerRecorder";
import { onSendAudioNote } from "../components/VideoAudioComment";
import { FC } from "react";

const AudioScreen: FC = () => {
    return ( 
        <AudioPlayerRecorder onSendAudioNote={onSendAudioNote}/>
    );
}
 
export default AudioScreen;