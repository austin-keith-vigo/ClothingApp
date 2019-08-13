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

  state = {email: '', password: ''}

  buttonPressed(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.storeLoginCredentials(this.state.email, this.state.password);
        this.setUsernameAndUserUID(this.props.navigationProp);
        // this.props.navigationProp.navigate('Home');
      })
      .catch(() => {
        console.log('login failed');
      });
  }

  async storeLoginCredentials(email, password) {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } catch(error) {
      console.log("something went wrong")
    }
  }

  /*
  Sets the username and userUID which is used for getting the person's data.
  the app navigates to the home screen after this is done because the homescreen,
  depends for the asynnchronus function to complete.
  */
  setUsernameAndUserUID(navigationProp){
    userUID = firebase.auth().currentUser.uid;
    var databaseRef = firebase.database().ref('users/'+uid);
    databaseRef.once('value').then((snapshot)=>{
      username = snapshot.val()['username'];
    });
    navigationProp.navigate('Home');
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
