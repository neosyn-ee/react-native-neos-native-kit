import React, {ReactNode} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SingletonHooksContainer} from 'react-singleton-hook';

const AppServiceProvider = ({children}: {children?: ReactNode}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SingletonHooksContainer />
      {children}
    </GestureHandlerRootView>
  );
};

export default AppServiceProvider;
