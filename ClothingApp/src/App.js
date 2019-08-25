import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

const StackNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Splash:{ screen :  SplashScreen }
  },
  {
    initialRouteName: 'Splash'
  }
);


const App = createAppContainer(StackNavigator);
export default App;
