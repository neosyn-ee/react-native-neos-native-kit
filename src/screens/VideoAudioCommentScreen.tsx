import { FC } from 'react';
import { VideoAudioComment, onSendAudioNote } from '../components/VideoAudioComment';

const VideoAudioCommentScreen: FC = () => {
    return (
        <VideoAudioComment
            video={{
                height: '100%',
                posterResizeMode: 'cover',
                thumb:
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
                source: {
                    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                },
            }}
            audioPlayer={
                {
                    onSendAudioNote,
                    progressDisplayMode: 'soundwave',
                }
            }
        />
    );
};

export default VideoAudioCommentScreen;
