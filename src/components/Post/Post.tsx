import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

import {PostProps} from './Post.types';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export const PostBody = ({children}: PropsWithChildren) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export const PostActions = ({children}: PropsWithChildren) => {
  return <View style={tw`flex-row gap-3 mb-2`}>{children}</View>;
};

const Post = memo(
  forwardRef(
    (
      {video, bodyContent, actionsContent}: PostProps,
      parentRef,
    ): JSX.Element => {
      const [autoplay, setAutoplay] = useState<boolean>(false);
      const [source, setSource] = useState(video.source);

      useImperativeHandle(parentRef, () => ({
        play,
        stop,
        unload,
      }));

      useEffect(() => {
        return () => unload();
      }, []);

      const play = () => {
        const {autoplay: isPlaying} = video;
        if (isPlaying) {
          return;
        }
        setAutoplay(true);
      };

      const stop = () => {
        const {paused} = video;
        if (paused) {
          return;
        }
        setAutoplay(false);
      };

      const unload = () => {
        if (
          typeof source !== 'number' &&
          source.hasOwnProperty('uri') &&
          source.uri
        ) {
          setSource({uri: undefined});
        }
      };

      const renderedBody =
        typeof bodyContent === 'string' ? (
          <PostBody>{bodyContent}</PostBody>
        ) : (
          bodyContent
        );
      return (
        <View style={bodyContent || actionsContent ? tw`bg-[#fff]` : tw``}>
          <VideoPlayer {...video} source={source} autoplay={autoplay} />
          <View style={tw`p-3`}>
            {actionsContent && <PostActions>{actionsContent}</PostActions>}
            {bodyContent && renderedBody}
            {video.extraComponent}
          </View>
        </View>
      );
    },
  ),
);

export default Post;
