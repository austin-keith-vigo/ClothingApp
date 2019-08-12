import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

username = 'austinvigo';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const TabScreens = createBottomTabNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
});

const App = createAppContainer(TabScreens);
export default App;
