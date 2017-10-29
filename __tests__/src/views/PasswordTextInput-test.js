import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import PasswordTextInput from '../../../src/views/PasswordTextInput';

describe('PasswordTextInput Snapshots', () => {
  const wrapper = shallow(<PasswordTextInput placeholder="PASSWORD" />);

  it('should be empty', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should store password', () => {
    wrapper.find('TextInput').simulate('changeText', 'password123');
    expect(wrapper).toMatchSnapshot();
  });

  it('should show password when clicked', () => {
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide password when clicked again', () => {
    wrapper.find('TouchableOpacity').simulate('press');
    expect(wrapper).toMatchSnapshot();
  });
});
