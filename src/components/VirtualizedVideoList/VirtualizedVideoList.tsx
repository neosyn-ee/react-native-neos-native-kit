/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';

import Post from '@components/Post/Post';
// import useMaterialNavBarHeight from '@hooks/useMaterialNavBarHeight';

import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = ({
  data,
}: VirtualizedVideoListProps<number>): JSX.Element => {
  const feedItemHeight = 70;
  const renderItem = ({item}: {item: number}): JSX.Element => {
    return (
      <View
        style={{
          height: feedItemHeight,
          backgroundColor: 'black',
        }}>
        <Post item={item} />
      </View>
    );
  };
  return (
    <View className="flex-1" style={{backgroundColor: 'black'}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        decelerationRate="normal"
        onEndReachedThreshold={0.25}
        onEndReached={({distanceFromEnd}) => console.log(distanceFromEnd)}
      />
    </View>
  );
};

export default VirtualizedVideoList;
