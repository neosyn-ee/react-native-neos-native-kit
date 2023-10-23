import React, {ReactNode} from 'react';

import {SingletonHooksContainer} from 'react-singleton-hook';

const AppServiceProvider = ({children}: {children?: ReactNode}) => {
  return (
    <>
      <SingletonHooksContainer />
      {children}
    </>
  );
};

export default AppServiceProvider;
