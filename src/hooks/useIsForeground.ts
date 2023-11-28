import {useState} from 'react';
import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

import {singletonHook} from 'react-singleton-hook';

export const useIsForeground = singletonHook<boolean>(true, (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const onChange = (state: AppStateStatus): void => {
      setIsForeground(state === 'active');
    };
    const listener = AppState.addEventListener('change', onChange);
    return () => listener.remove();
  }, [setIsForeground]);

  return isForeground;
});
