import {VideoPlayerProps} from '@components/VideoPlayer/VideoPlayer.type';

export type PostProps = {
  id: number;
  video: VideoPlayerProps;
  bodyContent?: JSX.Element | string;
  actionsContent?: JSX.Element;
};

export type PostType = PostProps;
