import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = memo((): JSX.Element => {
  return (
    <View className="h-[60px] justify-center items-center">
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
});

export default Spinner;
