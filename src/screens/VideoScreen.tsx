import React, {FC} from 'react';

import {MediaScreen} from '../components/MediaScreen';
import {SAMPLE_VIDEOFILE} from '../components/MediaScreen/MediaScreen.stories';

const VideoScreen: FC = () => {
  return <MediaScreen type="video" media={SAMPLE_VIDEOFILE} />;
};

export default VideoScreen;
