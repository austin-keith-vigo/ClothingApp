import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import LoginForm from './../components/LoginForm';
import firebase from 'firebase';

class LoginScreen extends Component {

  componentWillMount() {
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

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return(
      <View>
        <LoginForm navigationProp={this.props.navigation}/>
        <Button
          onPress={()=>{
            this.props.navigation.navigate('Home')
          }}
          title="To Home"
        />
        <Button
          onPress={()=>{
            this.props.navigation.navigate('UploadClothingPiece');
          }}
          title="to UploadClothingPieceScreen"
        />
      </View>
    );
  }
}

export default LoginScreen;
