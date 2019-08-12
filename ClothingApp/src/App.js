import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UploadClothingPieceScreen from './screens/UploadClothingPieceScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SplashScreen from './screens/SplashScreen';

var username = 'austinvigo';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    UploadClothingPiece: UploadClothingPieceScreen,
    CreateAccount: CreateAccountScreen,
    Splash: SplashScreen
  },
  {
    initialRouteName: 'Splash',
  }
);

const App = createAppContainer(navigator);
export default App;
