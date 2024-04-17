import React, {FC} from 'react';

import {MediaScreen} from '../components/MediaScreen';
import {SAMPLE_PHOTOFILE} from '../components/MediaScreen/MediaScreen.stories';

const PhotoScreen: FC = () => {
  return (
    <MediaScreen
      path={SAMPLE_PHOTOFILE.path}
      type="video"
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
export default PhotoScreen;
