declare module 'react-native-config' {
    export interface NativeConfig {
        DROPBOX_ACCESS_TOKEN?: string;
    }
    
    export const Config: NativeConfig
    export default Config
  }