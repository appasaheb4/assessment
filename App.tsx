/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {CustomeIcons} from './src/features/customeIcons';

import {LogBox} from 'react-native';
import {configure} from 'mobx';
configure({
  enforceActions: 'never',
});

LogBox.ignoreLogs(['Warning:']);
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <CustomeIcons />
    </>
  );
};
console.disableYellowBox = true;
export default App;
