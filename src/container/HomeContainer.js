// @flow

import React, { PureComponent, Element } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomeContainer extends PureComponent {
  render(): Element<*> {
    return <Home placeHolder="PASSWORD" style={styles.container} />;
  }
}

export default connect(function() {
  return {};
}, {})(HomeContainer);

const styles = StyleSheet.create({
  container: { flex: 1 },
});
