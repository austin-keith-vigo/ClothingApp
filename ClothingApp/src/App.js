import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

/*
AppTabNavigator handles creating the bottom tab bar. Each component handles
its own button options with what screen to navigate to and options such as
title or buttonPressed to create own navigation choices. AppTabNavigator is its
own navigation component and can be nested within other navigation components
to be used as screens.
*/
const AppTabNavigator = createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: "Home"
    })
  },
  Settings:{
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: "Settings"
    })
  }
});

/*
StackNavigator is to initialize all screens that won't have its own
bottom tab button. This is to make sure that users can navigate to other
screens that aren't shown in the bottom tab bar. It also uses AppTabNavigator
as its own individual screen in order to be able to display the navigation bar.
StackNavigator is the main navigator.
*/
const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: {
      headerMode: "none",   //these two navigation options are for disabling
      header: null          //back button on top left of screen
    }                       //can be moved to individual tab components
  },
  Login: { screen: LoginScreen },
  Splash:{ screen :  SplashScreen },
  },
  {
    initialRouteName: 'Splash'
  }
);


const App = createAppContainer(StackNavigator);
export default App;
