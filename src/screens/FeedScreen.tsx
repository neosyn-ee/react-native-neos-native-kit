import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

import VirtualizedVideoList from '@components/VirtualizedVideoList/VirtualizedVideoList';

const FeedScreen: FC = () => {
  const data = [...Array.from({length: 6}, (v, i) => i + 1)];
  const refetch = (): void => {};
  return (
    <SafeAreaView className="h-full">
      <VirtualizedVideoList data={data} refetch={refetch} />
    </SafeAreaView>
  );
};

export default FeedScreen;
