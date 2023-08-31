import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

import VirtualizedVideoList from '@components/VirtualizedVideoList/VirtualizedVideoList';

const FeedScreen: FC = () => {
  return (
    <SafeAreaView className="h-full">
      <VirtualizedVideoList />
    </SafeAreaView>
  );
};

export default FeedScreen;
