/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppServiceProvider} from '@components/AppServiceProvider';
import FeedScreen from '@screens/FeedScreen';
import HomeScreen from '@screens/HomeScreen';

import './nativewind-output';

const Tab = createMaterialBottomTabNavigator();

export default (): JSX.Element => (
  <AppServiceProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator labeled={false} initialRouteName="Feed">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="view-list"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </AppServiceProvider>
);
