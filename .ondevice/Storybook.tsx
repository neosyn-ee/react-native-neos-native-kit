import {AppServiceProvider} from '@components/AppServiceProvider';
import {getStorybookUI} from '@storybook/react-native';
import './storybook.requires';
const StorybookUIRoot = getStorybookUI({});
const StorybookUIRootWrapped = () => (
  <AppServiceProvider>
    <StorybookUIRoot />
  </AppServiceProvider>
);
export default StorybookUIRootWrapped;
