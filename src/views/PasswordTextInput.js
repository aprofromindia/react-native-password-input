// @flow

import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import colors from '../configs/AppConfig';

type Props = { placeholder: string };

type State = { text: string, hideText: boolean };

export default class PasswordTextInput extends React.PureComponent<
  Props,
  State
> {
  state = {
    text: '',
    hideText: true,
  };

  onPress = () => this.setState({ hideText: !this.state.hideText });

  onChangeText = text => this.setState({ text });

  onShownBackground = (): ?{ backgroundColor: string, borderColor: string } => {
    if (!this.state.hideText) {
      return {
        backgroundColor: colors.lightRed,
        borderColor: colors.borderRed,
      };
    }
    return null;
  };

  onShownText = (): ?{ color: string } => {
    if (!this.state.hideText) {
      return { color: colors.fontRed };
    }
    return null;
  };

  render(): React.Element<*> {
    return (
      <View style={[styles.container, this.onShownBackground()]}>
        <TextInput
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="go"
          ellipsizeMode="end"
          value={this.state.text.toUpperCase()}
          secureTextEntry={this.state.hideText}
          style={styles.input}
          placeholder={this.props.placeholder}
          numberOfLines={1}
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={this.onShownText()}>
            {this.state.hideText ? 'SHOW' : 'HIDE'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 2,
    height: 40,
    margin: 16,
    paddingLeft: 10,
  },
  input: { flex: 8 },
  button: { flex: 2, justifyContent: 'center', alignItems: 'center' },
});
