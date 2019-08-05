import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputField from './InputField';
class LoginForm extends Component {

  state = {email: '', password: ''}

  render() {
    return(
      <View>
        <InputField />
        <InputField />
      </View>
    );
  }
}

export default LoginForm;
