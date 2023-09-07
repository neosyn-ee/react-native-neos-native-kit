import React, {FC, useReducer} from 'react';
import {SafeAreaView} from 'react-native';

import postReducer, {PostActionKind, PostState} from 'reducers/postReducer';
import data from 'storage/database/post';

import VirtualizedVideoList from '@components/VirtualizedVideoList/VirtualizedVideoList';
import {delay} from '@utils/helpers';

const INITIAL_STATE: PostState = {
  prev: [],
  data: data.slice(0, 20),
  next: data.slice(20, 40),
};

const FeedScreen: FC = () => {
  const [posts, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const fetchDataByPage = async (
    page: number = 1,
    prevPage: number,
  ): Promise<number> => {
    await delay(2000);
    console.log('new page triggered');
    dispatch({
      type: page > prevPage ? PostActionKind.INCREASE : PostActionKind.DECREASE,
      payload: page,
    });
    return 1;
  };

  const {data} = posts;
  return (
    <SafeAreaView className="h-full">
      <VirtualizedVideoList data={data} fetchDataByPage={fetchDataByPage} />
    </SafeAreaView>
  );
};

export default FeedScreen;
