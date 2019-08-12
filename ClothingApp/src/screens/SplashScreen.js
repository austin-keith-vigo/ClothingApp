import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';

/*
Allows for persistent login, will try to retrieve login credentials from
async storage and login with firebase. If login credentials do not exist
will load the login screen
*/
class SplashScreen extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0JR6pVP6v0JcX0NwCm5f-ZsEYQe-Ydbk",
      authDomain: "my-closet-c4c42.firebaseapp.com",
      databaseURL: "https://my-closet-c4c42.firebaseio.com",
      projectId: "my-closet-c4c42",
      storageBucket: "gs://my-closet-c4c42.appspot.com",
      messagingSenderId: "870899532598",
      appId: "1:870899532598:web:03be0160a5aa15e5"
    });
    this.loginUser(this.props.navigation);
  }

  async loginUser(navigationProp){
    try {
      let emailData = await AsyncStorage.getItem('email');
      let passwordData = await AsyncStorage.getItem('password');

      firebase.auth().signInWithEmailAndPassword(emailData, passwordData)
        .then(() => {
          navigationProp.navigate('Home');
        })
        .catch((error) => {
          console.log(error);
          navigationProp.navigate('Login');
        });
    } catch (error) {
      navigationProp.navigate('Login');
    }
  }

  render() {
    return(
      <View>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}



export default SplashScreen;
