import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import PasswordTextInput from '../../../src/views/PasswordTextInput';

describe('PasswordTextInput', () => {
  const wrapper = shallow(<PasswordTextInput placeholder="PASSWORD" />);

  it('should be empty', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should store password', () => {
    wrapper.setState({ text: 'password123' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should show password', () => {
    wrapper.setState({ hideText: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide password when clicked', () => {
    wrapper.setState({ hideText: true });
    expect(wrapper).toMatchSnapshot();
  });
});
