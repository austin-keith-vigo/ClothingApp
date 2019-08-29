import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';

class SplashScreen extends Component{
  static navigationOptions = {
    title: 'Splash',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };
  //Initialize firebase when splash screen loads in
  constructor(props){
    super(props);
    this._bootstrapAsync();
    firebase.initializeApp({
      apiKey: "AIzaSyC0JR6pVP6v0JcX0NwCm5f-ZsEYQe-Ydbk",
      authDomain: "my-closet-c4c42.firebaseapp.com",
      databaseURL: "https://my-closet-c4c42.firebaseio.com",
      projectId: "my-closet-c4c42",
      storageBucket: "gs://my-closet-c4c42.appspot.com",
      messagingSenderId: "870899532598",
      appId: "1:870899532598:web:03be0160a5aa15e5"
    });
  }


  _bootstrapAsync = async() => {
    console.log("im in usertoken");
    const userToken = await AsyncStorage.getItem('userToken');
    const userEmail = await AsyncStorage.getItem('email');
    const userPassword = await AsyncStorage.getItem('password');
    console.log(userEmail);
    console.log(userPassword);
    if (userToken != null) {
      //firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
    }
    this.props.navigation.navigate(userToken ? 'Main' : 'Login')
  };
  //Pull from ASYNC Storage and try logging in here
  // async storeToken(user) {
  //   try {
  //     await AsyncStorage.setItem("userData", JSON.stringify(user));
  //   } catch (error) {
  //     console.log("set error", error);
  //   }
  // }

  /*
  async getLoginCredentials() {
    //Try to grab the username and password. If it is empty, will throw an error
    try {
      // let userData = await AsyncStorage.getItem("userData");
      // let data = JSON.parse(userData);

      //Login in through firebase

      //Go to the home Home Home screen
      this.props.navigation('Home');
    } catch (error) {
      console.log ("No user credentials exist in ASYNC storage");
      this.props.navigation('Login');
    }
  }
  */

  render(){
    return(
      <View style={styles.viewStyle}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    backgroundColor: 'red'
  }
})

export default SplashScreen;
