import React, {ReactNode} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {SingletonHooksContainer} from 'react-singleton-hook';

const AppServiceProvider = ({children}: {children?: ReactNode}) => {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <SingletonHooksContainer />
          {children}
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default AppServiceProvider;
