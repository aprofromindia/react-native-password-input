import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import PasswordTextInput from '../../../src/views/PasswordTextInput';

describe('PasswordTextInput', () => {
  const wrapper = shallow(<PasswordTextInput placeholder="PASSWORD" />);

  it('should be empty', () => {
    expect(wrapper.state('text')).toBe('');
    expect(wrapper.find('TextInput').prop('placeholder')).toBe('PASSWORD');
    expect(wrapper.find('Text').prop('children')).toBe('SHOW');
    expect(wrapper).toMatchSnapshot();
  });

  it('should store password', () => {
    wrapper.find('TextInput').simulate('changeText', 'password123');
    expect(wrapper.state('text')).toBe('password123');
    expect(wrapper.find('TextInput').prop('secureTextEntry')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should show password when clicked', () => {
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').prop('children')).toBe('HIDE');
    expect(wrapper.find('TextInput').prop('secureTextEntry')).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide password when clicked again', () => {
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper.find('Text').prop('children')).toBe('SHOW');
    expect(wrapper.find('TextInput').prop('secureTextEntry')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
