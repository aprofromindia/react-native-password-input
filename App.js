// @flow

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import HomeContainer from './src/container/HomeContainer';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeContainer style={styles.container} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
