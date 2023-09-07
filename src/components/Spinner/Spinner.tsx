import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    justifySelf: 'stretch',
  },
});

export default Spinner;
