import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import '../nativewind-output';

export const decorators = [withBackgrounds];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};