import React, {ReactNode} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {SingletonHooksContainer} from 'react-singleton-hook';

const AppServiceProvider = ({children}: {children?: ReactNode}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SingletonHooksContainer />
        {children}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppServiceProvider;
