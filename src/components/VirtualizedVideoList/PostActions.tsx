import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

export const PostActions = ({children}: PropsWithChildren) => {
  return <View className="flex-row gap-3 mb-2">{children}</View>;
};
