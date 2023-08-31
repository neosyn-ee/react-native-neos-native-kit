/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';

import useMaterialNavBarHeight from '@hooks/useMaterialNavBarHeight';

import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';

const VirtualizedVideoList = (
  _props: VirtualizedVideoListProps,
): JSX.Element => {
  const array = [...Array.from({length: 6}, (v, i) => i + 1)];
  const feedItemHeight = Math.floor(
    Dimensions.get('window').height - useMaterialNavBarHeight(false),
  );
  const renderItem = ({
    item,
    index,
  }: {
    item: number;
    index: number;
  }): JSX.Element => {
    return (
      <View
        style={{
          height: feedItemHeight,
          backgroundColor: index % 2 === 0 ? 'blue' : 'pink',
        }}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View className="flex-1" style={{backgroundColor: 'black'}}>
      <FlatList
        data={array}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={item => item.toString()}
        decelerationRate="normal"
      />
    </View>
  );
};

export default VirtualizedVideoList;
