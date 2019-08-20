import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UploadClothingPieceScreen from './screens/UploadClothingPieceScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SplashScreen from './screens/SplashScreen';
import SettingScreen from './screens/SettingScreen';

username = '';
userUID = '';

/*
AppTabNavigator handles creating the bottom tab bar. Each component handles
its own button options with what screen to navigate to and options such as
title or buttonPressed to create own navigation choices. AppTabNavigator is its
own navigation component and can be nested within other navigation components
to be used as screens.
*/
const AppTabNavigator = createBottomTabNavigator({
  Home:   {screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: "Home"
    })},
  UploadClothingPiece: {screen: UploadClothingPieceScreen,
    navigationOptions: ({navigation}) => ({
      title: "Upload"
    })},
  Setting:{screen: SettingScreen,
    navigationOptions: ({navigation}) => ({
      title: "Setting"
    })}
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
  Splash: {screen: SplashScreen},
  CreateAccount: {screen: CreateAccountScreen},
  Login: {screen: LoginScreen}
  },
  {
    initialRouteName: "Splash" //app must load splashscreen first in order
  }                            //to initialize firebase
);

const App = createAppContainer(StackNavigator);
export default App;
