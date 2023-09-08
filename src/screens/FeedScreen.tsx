import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';

import data from 'storage/database/post';

import {PostType} from '@components/Post/Post.types';
import VirtualizedVideoList from '@components/VirtualizedVideoList/VirtualizedVideoList';
import {delay} from '@utils/helpers';

const FeedScreen: FC = () => {
  const [pagesNum, pageLength] = [5, 20];
  const [posts, setPosts] = useState<PostType[]>(data.slice(0, pageLength));
  const refreshData = async (): Promise<number> => {
    await delay(2000);
    setPosts(prev => {
      const start = (data as PostType[]).indexOf(prev[prev.length - 1]) + 1;
      return [...prev, ...data.slice(start, start + pageLength)];
    });
    return 1;
  };

  return (
    <SafeAreaView className="h-full">
      <VirtualizedVideoList
        data={posts}
        refreshData={refreshData}
        paginated={true}
        pagesNum={pagesNum}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
