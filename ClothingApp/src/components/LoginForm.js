import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import InputField from './InputField';
import Header from './Header';
import firebase from 'firebase';

class LoginForm extends Component {

  state = {email: '', password: ''}

  buttonPressed(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(() => {
      console.log('login failed');
    })
    .then(() => {
      console.log('login succeeded');
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Login" />
        <InputField
          placeholder="email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          autocorrect="false"
          secureTextEntry="false"
        />
        <InputField
          placeholder="password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          autocorrect="false"
          secureTextEntry="true"
        />

        <Button
          title="Login"
          onPress={this.buttonPressed.bind(this)}
        />

      </View>
    );
  }
}

export default LoginForm;
