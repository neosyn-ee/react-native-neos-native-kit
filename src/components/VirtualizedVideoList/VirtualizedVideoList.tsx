import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';

import Post from '@components/Post/Post';
import {PostType} from '@components/Post/Post.types';
import Spinner from '@components/Spinner/Spinner';

import {PostBody} from './PostBody';
import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = ({
  data,
  pagesNum,
  refreshData,
}: VirtualizedVideoListProps<PostType>): JSX.Element => {
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
        const res = await refreshData();
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
    ({
      item: {
        videoUrl,
        thumbnailUrl,
        bodyContent,
        actionsContent,
        videoControls: {controls, autoplay},
      },
    }: {
      item: PostType;
    }): JSX.Element => {
      const video = {
        source: {uri: videoUrl},
        controls: controls,
        paused: !autoplay,
        poster: thumbnailUrl,
        muted: true,
      };
      const body =
        typeof bodyContent === 'string' ? (
          <PostBody>{bodyContent}</PostBody>
        ) : (
          bodyContent
        );
      return <Post video={video} body={body} actions={actionsContent} />;
    },
    [],
  );
  return (
    <View className="flex-1">
      <FlatList
        data={data}
        windowSize={5}
        renderItem={renderItem}
        keyExtractor={({id}) => id.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={handleOnEndReached}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        refreshing={refreshing}
        removeClippedSubviews
        // viewabilityConfig={{itemVisiblePercentThreshold: 30}}
        // onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      {refreshing && <Spinner />}
    </View>
  );
};

export default VirtualizedVideoList;
