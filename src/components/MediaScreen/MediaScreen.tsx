import React from 'react';
import {Image} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {VideoPlayer} from '@components/VideoPlayer';
import {SCREEN_WIDTH} from '@utils/constants';

import {MediaScreenProps} from './MediaScreen.types';

const MediaScreen = ({media, type}: MediaScreenProps) => {
  // NOTE: due to the orientation-related bug, the width and height properties will be used in inverted mode
  const ratio = 'width' in media ? SCREEN_WIDTH / media.height : undefined; // here media.height is the actual picture's width
  const mediaHasHeight = 'height' in media && ratio;

  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
      {type === 'photo' && (
        <Image
          width={SCREEN_WIDTH}
          height={mediaHasHeight ? media.width * ratio : undefined} // here media.width is the actual picture's height
          source={{uri: `file://${media.path}`}}
        />
      )}
      {type === 'video' && (
        <VideoPlayer source={{uri: `file://${media.path}`}} height="100%" />
      )}
    </SafeAreaView>
  );
};

export default MediaScreen;
