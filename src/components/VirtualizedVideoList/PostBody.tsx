import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

export const PostBody = ({children}: PropsWithChildren) => {
  return (
    <View className="p6">
      <Text>{children}</Text>
    </View>
  );
};
