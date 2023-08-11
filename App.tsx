import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeScreen from '@screens/HomeScreen';

import './nativewind-output';

const RootStack = createStackNavigator();

export default (): JSX.Element => (
  <SafeAreaProvider>
    <SafeAreaView />
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
