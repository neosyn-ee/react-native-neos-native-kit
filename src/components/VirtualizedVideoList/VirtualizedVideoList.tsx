import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import Post from '@components/Post/Post';
import {PostType} from '@components/Post/Post.types';

import {PostBody} from './PostBody';
import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = ({
  data,
  fetchDataByPage,
}: VirtualizedVideoListProps<PostType>): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const handleOnViewableItemsChanged = ({changed}: any) => {
  //   changed.forEach((element: any) => {
  //     console.log('handleOnViewableItemsChanged', element);
  //   });
  // };
  const handleOnEndReached = async () => {
    console.log('End reached');
    try {
      const res = await fetchDataByPage(currentPage + 1, currentPage);
      if (res) {
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleStartReached = async () => {
    console.log('Start reached');
    try {
      const res = await fetchDataByPage(currentPage - 1, currentPage);
      if (res) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = ({
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
  };
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={data}
        // windowSize={4}
        renderItem={renderItem}
        // keyExtractor={({id}) => id.toString()}
        onEndReachedThreshold={0.2}
        onStartReached={handleStartReached}
        onEndReached={handleOnEndReached}
        // initialNumToRender={5}
        // maxToRenderPerBatch={5}
        // viewabilityConfig={{itemVisiblePercentThreshold: 30}}
        // onViewableItemsChanged={handleOnViewableItemsChanged}
        removeClippedSubviews
        pagingEnabled
      />
    </SafeAreaView>
  );
};

export default VirtualizedVideoList;
