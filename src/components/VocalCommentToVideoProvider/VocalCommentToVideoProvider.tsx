import React from 'react';
import {Text, View} from 'react-native';

import {VideoPlayer} from '@components/VideoPlayer';

import {VocalCommentToVideoProviderProps} from './VocalCommentToVideoProvider.types';

const VocalCommentToVideoProvider = ({
  video,
}: VocalCommentToVideoProviderProps) => {
  return (
    <View>
      <VideoPlayer {...video} />
      <Text>VocalCommentToVideoProvider</Text>
    </View>
  );
};

export default VocalCommentToVideoProvider;
