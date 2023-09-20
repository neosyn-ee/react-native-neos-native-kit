import {Platform} from 'react-native';

export function isAndroid() {
  return Platform.OS === 'android';
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
