import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import InputField from './InputField';

class CreateAccountForm extends Component {

  state={ email:'', username:'', password:'' };

  buttonPressed(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      console.log('created');
      this.storeUsername(this.state.username);
      this.props.navigationProp.navigate('Home');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  async storeUsername(username) {
    try {
      await AsyncStorage.setItem('username', username);
    } catch(error) {
      console.log("something went wrong")
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
          placeholder="username"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
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
          title="Create Account"
          onPress={this.buttonPressed.bind(this)}
        />
      </View>
    );
  }
}

export default CreateAccountForm;
