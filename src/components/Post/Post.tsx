import React, {memo, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

import VideoPlayer from '@components/VideoPlayer/VideoPlayer';

import {PostProps} from './Post.types';

export const PostBody = ({children}: PropsWithChildren) => {
  return (
    <View className="p6">
      <Text>{children}</Text>
    </View>
  );
};

export const PostActions = ({children}: PropsWithChildren) => {
  return <View className="flex-row gap-3 mb-2">{children}</View>;
};

const Post = memo(
  ({video, bodyContent, actionsContent}: PostProps): JSX.Element => {
    const renderedBody =
      typeof bodyContent === 'string' ? (
        <PostBody>{bodyContent}</PostBody>
      ) : (
        bodyContent
      );
    return (
      <View className="bg-[#fff]">
        <VideoPlayer {...video} />
        <View className="p-3">
          {actionsContent && <PostActions>{actionsContent}</PostActions>}
          {bodyContent && renderedBody}
        </View>
      </View>
    );
  },
);

export default Post;
