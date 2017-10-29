// @flow

import React, { Element } from 'react';
import { View, StyleSheet } from 'react-native';
import PasswordTextInput from '../views/PasswordTextInput';

export default function Home(props): Element<*> {
  return (
    <View style={styles.container}>
      <PasswordTextInput {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
