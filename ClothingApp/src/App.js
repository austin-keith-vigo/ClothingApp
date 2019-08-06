import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
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
        <Button
          title="Navigate"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  LoginScreen: App,
  HomeScreen: Home,
},{
  initialRouteName: "LoginScreen"
});

export default createAppContainer(AppNavigator);
