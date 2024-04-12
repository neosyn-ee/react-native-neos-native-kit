import React, {FC} from 'react';

import {MediaScreen} from '../components/MediaScreen';
import {SAMPLE_VIDEOFILE} from '../components/MediaScreen/MediaScreen.stories';

const VideoScreen: FC = () => {
  return (
    <MediaScreen
      type="video"
      media={SAMPLE_VIDEOFILE}
      onPressClose={() => console.log('close')}
      modalSaveTextError={{
        title: 'Error',
        description: 'description',
      }}
      modalSaveTextSuccess={{
        description: 'success',
        title: 'success',
      }}
    />
  );
};

export default VideoScreen;
