# React Native Core

### Features

Developer experience first:

- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 📁 Routing with [React navigation](https://reactnavigation.org/)
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Detox
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

### Requirements

- Node.js 14+ and yarn
- Java jdk
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

For more information: [React Native setup](https://reactnative.dev/docs/environment-setup)
### Getting started

Run the following command on your local environment:

```shell
git clone
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn run start
yarn run android
# Or
yarn run ios
```
#### Storybook 
An example how to add a separate JS bundle entry point for RN Storybook and how to switch between entry points from the Dev Menu:

<div style="display:flex;">

<img width="250" alt="iOS dev menu" src="https://user-images.githubusercontent.com/16039/232308884-0f015e13-afe1-47f4-b8ee-e888bf10d1e0.png">

<img width="240" alt="Android dev menu" src="https://user-images.githubusercontent.com/16039/232308885-3f8a66a1-5823-43ad-af46-0fa70ebb8ab0.png">

</div>

A separate entry point helps to ensure that application's bundle won't include any Storybook code.

Also switching between Storybook and app is very straightforward and convenient and it's possible to keep the app and Storybook open in different Simulators / Emulators at the same time.

## How to use

Check this diff:
https://github.com/zubko/react-native-storybook-with-dev-menu/commit/7486060842a15d12ecdd5256f2fb0ddddc7e0e32 

Generally the process is:
1. Add Storybook JS bundle entry point
2. For Android and iOS:
    * Add extra files to the native projects
    * Change the existing native files

## Thoughts

Probably it should be possible to move the code to a separate NPM package to make the integration a bit easier, but I'm lacking some knowledge of native Android module part of RN to get the `DevSupportManager` instance and application context in the module at the proper moment of time when they are constructed, so any suggestions are welcome. 

Anyways, the decision of the JS entry point happens in the native app's code, so some manual changes to the native code of the app will be needed in any case.
### Testing

Testing is an important part of the development process and often the neglected one. This starter code comes up with Jest and React Testing Library for unit testing and Detox for E2E testing.

#### Unit Testing

To run the unit tests, run the following command:

```shell
npm run test
```

#### E2E Testing

To run the E2E tests, you first need to run the following command:

```shell
npm run e2e:prepare # Only need to run once
```

Then, you can run the following command to run the E2E tests:

```shell
npm run e2e:ios
# Or
npm run e2e:android
```
