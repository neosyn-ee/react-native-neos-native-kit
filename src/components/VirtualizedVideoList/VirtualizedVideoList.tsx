import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import Post from '@components/Post/Post';
import {PostType} from '@components/Post/Post.types';

import {PostBody} from './PostBody';
import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = ({
  data,
  fetchDataByPage,
  maxToRenderPerBatch,
}: VirtualizedVideoListProps<PostType>): JSX.Element => {
  // state currentPage
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleOnEndReached = async () => {
    console.log('End reached');
    try {
      await fetchDataByPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error(error);
    }
  };
  // onEndReachedHandler
  //  props.OnRefresh (async)
  //    se ok setCurrentPage(curr + 1) altrimenti die
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
        renderItem={renderItem}
        keyExtractor={({id}) => id.toString()}
        decelerationRate="normal"
        onEndReachedThreshold={0.75}
        onEndReached={handleOnEndReached} // passare pagina corrente e futura
        maxToRenderPerBatch={maxToRenderPerBatch}
      />
    </SafeAreaView>
  );
};

export default VirtualizedVideoList;
