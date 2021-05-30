import React from 'react';
import {View, Text} from 'react-native';
import * as LibraryComponetns from '@at/library/components';
export const CustomeIcons = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <LibraryComponetns.Atoms.Icon.CustomeRemixIcon
        icon="bill-fill"
        size={50}
        color="red"
      />

      <LibraryComponetns.Atoms.Icon.CustomeLineAwsomeIcon
        icon="truck"
        size={40}
        color="blue"
      />
    </View>
  );
};
