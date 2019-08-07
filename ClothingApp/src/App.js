import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const App = createAppContainer(navigator);
export default App;
