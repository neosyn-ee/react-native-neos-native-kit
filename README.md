# @neosyn-ee/react-native-neos-native-kit

[![npm version](https://badge.fury.io/js/%40neosyn-ee%2Freact-native-neos-native-kit.svg)](https://badge.fury.io/js/%40neosyn-ee%2Freact-native-neos-native-kit)
[![GitHub issues](https://img.shields.io/github/issues/neosyn-ee/react-native-neos-native-kit)](https://github.com/neosyn-ee/react-native-neos-native-kit/issues)
[![GitHub license](https://img.shields.io/github/license/neosyn-ee/react-native-neos-native-kit)](https://github.com/neosyn-ee/react-native-neos-native-kit/blob/main/LICENSE)

A set of ready-to-use components that makes app development a fast and effortless experience. Designed for React Native, this kit provides a comprehensive collection of components and utilities to streamline your development process.

## Features

- **Ready-to-Use Components**: Dive straight into development with a suite of pre-built components designed for common use cases.
- **Cross-Platform Compatibility**: Build for both iOS and Android platforms seamlessly.
- **Efficient Development**: Accelerate your development process by utilizing components that are designed for efficiency and ease of use.
- **Flexible and Customizable**: Tailor components to suit your specific project needs with easy-to-customize options.
- **Continuous Integration**: Fully compatible with common CI/CD pipelines for automated testing and deployment.

## Installation

Install the package via npm:

```bash
npm install @neosyn-ee/react-native-neos-native-kit
```

```bash
yarn add @neosyn-ee/react-native-neos-native-kit
```
## Add provider

```js
 <AppServiceProvider>
  <MyApp/>
 </AppServiceProvider>
```
# [react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera)
## Updating manifests
### IOS

```js
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Camera.</string>

<!-- optionally, if you want to record audio: -->
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Microphone.</string>
```
### Android

```js
<uses-permission android:name="android.permission.CAMERA" />

<!-- optionally, if you want to record audio: -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```
