/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Routes from './src/flows/routes';

import React from 'react';
import * as AirLine from './src/features/airline';
import {LogBox} from 'react-native';
import {configure} from 'mobx';
configure({
  enforceActions: 'never',
});

LogBox.ignoreLogs(['Warning:']);
declare const global: {HermesInternal: null | {}};

const App = () => {
  const loader = async () => {
    await AirLine.startup();
  };

  React.useEffect(() => {
    loader();
  }, []);
  return (
    <>
      <Routes
        scenes={{
          ...AirLine.Scenes,
        }}
      />
    </>
  );
};
console.disableYellowBox = true;
export default App;
