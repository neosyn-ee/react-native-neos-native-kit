import {DimensionValue} from 'react-native';

import {VideoPlayerProps as CorePlayerProps} from 'react-native-media-console';

type disableControlsType = {
  default: boolean;
  fullscreen: boolean;
};

export type PlayerProps = CorePlayerProps & {
  disableControls?: boolean;
  setFullscreen?: React.Dispatch<React.SetStateAction<boolean>>;
  playerInfo?: React.MutableRefObject<{
    elapsedSecs: number;
  }>;
};

export type VideoPlayerProps = CorePlayerProps &
  VideoSizeProps & {
    autoplay?: boolean;
    thumb?: string;
    disableControlsWhen?: disableControlsType;
    setFullscreen?: React.Dispatch<React.SetStateAction<boolean>>;
    playerInfo?: React.MutableRefObject<{
      elapsedSecs: number;
    }>;
  };

export type VideoSizeProps = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
};
