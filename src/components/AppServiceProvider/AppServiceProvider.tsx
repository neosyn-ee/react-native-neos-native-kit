import React, {ReactNode} from 'react';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {SingletonHooksContainer} from 'react-singleton-hook';

const AppServiceProvider = ({children}: {children?: ReactNode}) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SingletonHooksContainer />
      {children}
    </SafeAreaProvider>
  );
};

export default AppServiceProvider;
