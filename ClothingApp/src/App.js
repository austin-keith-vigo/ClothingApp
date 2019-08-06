import React, { Component } from 'react';
import { View, Text } from 'react-native'
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC0JR6pVP6v0JcX0NwCm5f-ZsEYQe-Ydbk",
      authDomain: "my-closet-c4c42.firebaseapp.com",
      databaseURL: "https://my-closet-c4c42.firebaseio.com",
      projectId: "my-closet-c4c42",
      storageBucket: "",
      messagingSenderId: "870899532598",
      appId: "1:870899532598:web:4ae1d6452d56c98e"
    });
  }

  render() {
    return(
      <View>
        <LoginForm />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);
