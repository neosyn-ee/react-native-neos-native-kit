import {VideoPlayerProps} from '../VideoPlayer/VideoPlayer.type';

export type PostProps = {
  id: number;
  video: VideoPlayerProps;
  bodyContent?: JSX.Element | string;
  actionsContent?: JSX.Element;
};

export type PostType = PostProps;

export type PostExposedInstanceValue = {
  itemHeight: number;
  play: () => void;
  stop: () => void;
  unload: () => void;
};
