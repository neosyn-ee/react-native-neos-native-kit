import React, {FC, useReducer} from 'react';
import {SafeAreaView} from 'react-native';

import postReducer, {PostActionKind, PostState} from 'reducers/postReducer';
import data from 'storage/database/post';

import VirtualizedVideoList from '@components/VirtualizedVideoList/VirtualizedVideoList';
import {delay} from '@utils/helpers';

const INITIAL_STATE: PostState = {
  prev: [],
  data: data.slice(0, 20),
  next: data.slice(39, 60),
};

const FeedScreen: FC = () => {
  const [posts, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const fetchDataByPage = async (page: number = 1): Promise<void> => {
    await delay(2000);
    dispatch({type: PostActionKind.INCREASE, payload: page});
  };

  return (
    <SafeAreaView className="h-full">
      <VirtualizedVideoList
        data={posts.data}
        fetchDataByPage={fetchDataByPage}
        maxToRenderPerBatch={2}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
