import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {SingletonHooksContainer} from 'react-singleton-hook';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import '../nativewind-output';

export const decorators = [
  withBackgrounds,
  // Using a decorator to apply padding for every story
  StoryFn => (
    <GestureHandlerRootView style={{flex: 1}}>
      <StoryFn />
    </GestureHandlerRootView>
  ),
  StoryFn => (
    <>
      <SingletonHooksContainer />
      <StoryFn />
    </>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
