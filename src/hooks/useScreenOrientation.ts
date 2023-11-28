import {useEffect, useState} from 'react';

import Orientation, {
  LANDSCAPE,
  OrientationType,
} from 'react-native-orientation-locker';
import {singletonHook} from 'react-singleton-hook';

type ScreenOrientationContextType = {
  isLandscape?: boolean;
  screenOrientation?: OrientationType;
};

export const useScreenOrientation = singletonHook<ScreenOrientationContextType>(
  {
    isLandscape: false,
    screenOrientation: Orientation.getInitialOrientation(),
  },
  () => {
    const [screenOrientation, setScreenOrientation] = useState<OrientationType>(
      Orientation.getInitialOrientation(),
    );

    useEffect(() => {
      const onChange = (result: OrientationType) => {
        setScreenOrientation(result);
      };
      Orientation.addOrientationListener(onChange);
      return () => {
        Orientation.removeOrientationListener(onChange);
      };
    }, []);

    return {
      isLandscape: screenOrientation.includes(LANDSCAPE),
      screenOrientation,
    };
  },
);
