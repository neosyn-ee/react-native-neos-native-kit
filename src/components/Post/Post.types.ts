import {VideoPlayerProps} from 'react-native-media-console';

export type PostProps = {
  video: Partial<VideoPlayerProps>;
  body: JSX.Element;
  actions: JSX.Element;
};

export type PostType = {
  id: number;
  name: string;
  videoUrl: string;
  thumbnailUrl: string;
  bodyContent: JSX.Element | string;
  actionsContent: JSX.Element;
  videoControls: {[key: string]: any};
};

export type sourceType = VideoPlayerProps['source'];
