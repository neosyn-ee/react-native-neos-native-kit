import {DimensionValue} from 'react-native';

import {VideoPlayerProps as CorePlayerProps} from 'react-native-media-console';

export type VideoPlayerProps = CorePlayerProps &
  VideoSizeProps & {
    fullscreenOnRotate?: number;
    disableControls?: boolean;
    setFullscreen?: React.Dispatch<React.SetStateAction<boolean>>;
    playerInfo?: React.MutableRefObject<{
      elapsedSecs: number;
    }>;
  };

export type VideoSizeProps = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
};
