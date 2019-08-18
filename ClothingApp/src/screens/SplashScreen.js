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

/*
Get the email and password from async storage and use that to login.
If it fails at any step will jump to login. If login was successful
will get the users' firebase storage bucket name and their username
from the Realtime Database.
*/
  async loginUser(navigationProp){
    try {
      let emailData = await AsyncStorage.getItem('email');
      let passwordData = await AsyncStorage.getItem('password');

      console.log(emailData, passwordData);
      firebase.auth().signInWithEmailAndPassword(emailData, passwordData)
        .then(() => {
          userUID = firebase.auth().currentUser.uid;
          this.getUsername(navigationProp, userUID);
        })
        .catch((error) => {
          console.log(error);
          navigationProp.navigate('Login');
        });
    } catch (error) {
      console.log(error)
      navigationProp.navigate('Login');
    }
  }

  /*
  Retrieves username from the realtime database. This is an asynchronus call
  and home depends on the username.
  Navigate is called in here because username depends on the completion of This
  method call.
  */
  getUsername(navigationProp, uid){
    var databaseRef = firebase.database().ref('users/'+uid);
    databaseRef.once('value').then((snapshot)=>{
      username = snapshot.val()['username'];
      navigationProp.navigate('Home');
    });
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
