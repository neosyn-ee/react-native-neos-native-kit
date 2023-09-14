import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Post from '@components/Post/Post';
import {PostType} from '@components/Post/Post.types';
import Spinner from '@components/Spinner/Spinner';

import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = ({
  data,
  paginated,
  pagesNum,
  fetchData,
}: VirtualizedVideoListProps): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // const handleOnViewableItemsChanged = ({changed}: any) => {
  //   changed.forEach((element: any) => {
  //     console.log('handleOnViewableItemsChanged', element);
  //   });
  // };

  const handleOnEndReached = async () => {
    if (currentPage < pagesNum! && !refreshing) {
      try {
        setRefreshing(true);
        const res = await fetchData(currentPage + 1);
        if (res) {
          setCurrentPage(currentPage + 1);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setRefreshing(false);
      }
    }
  };
  const renderItem = useCallback(
    ({item: itemProps}: {item: PostType}): JSX.Element => (
      <Post {...itemProps} />
    ),
    [],
  );
  const maxItemNum = 100;
  const itemsCount = data.length;
  useEffect(() => {
    setPosts(prev => {
      const oldData =
        prev.length <= maxItemNum - itemsCount ? prev : prev.slice(itemsCount);
      return [...oldData, ...data];
    });
  }, [data]);

  return (
    <View className="flex-1">
      {posts.length ? (
        <FlatList
          data={posts}
          windowSize={5}
          renderItem={renderItem}
          keyExtractor={({id}) => id.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={paginated ? handleOnEndReached : undefined}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          refreshing={refreshing}
          removeClippedSubviews
          // viewabilityConfig={{itemVisiblePercentThreshold: 30}}
          // onViewableItemsChanged={handleOnViewableItemsChanged}
        />
      ) : null}
      {refreshing && <Spinner />}
    </View>
  );
};

export default VirtualizedVideoList;
