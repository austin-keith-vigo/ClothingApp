import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import InputField from './InputField';
import Header from './Header';
import firebase from 'firebase';

class LoginForm extends Component {

  componentWillMount(){
    this.getUsername();
  }

  state = {email: '', password: ''}

  buttonPressed(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {

        this.props.navigationProp.navigate('Home');
      })
      .catch(() => {
        console.log('login failed');
      });
  }

  async storeUsername() {
    try {
      await AsyncStorage.setItem('username','austinvigo');
    } catch(error) {
      console.log("something went wrong")
    }
  }

  async getUsername(){
    try {
      let userNameData = await AsyncStorage.getItem('username');
    } catch (error) {
      console.log("something went wrong");
    }
  }

  render() {
    return(
      <View>
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
