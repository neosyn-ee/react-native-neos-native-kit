import {Platform} from 'react-native';

export function isAndroid() {
  return Platform.OS === 'android';
}

export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
