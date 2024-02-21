import React, {FC} from 'react';

import {
  onSendAudioNote,
  VideoAudioComment,
} from '../components/VideoAudioComment';

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
      audioPlayer={{
        onSendAudioNote,
        progressDisplayMode: 'soundwave',
      }}
    />
  );
};

export default VideoAudioCommentScreen;
