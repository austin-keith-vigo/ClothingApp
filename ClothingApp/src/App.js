import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UploadClothingPieceScreen from './screens/UploadClothingPieceScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SplashScreen from './screens/SplashScreen';
import SettingScreen from './screens/SettingScreen';
import { NavigationActions } from 'react-navigation';

username = '';
userUID = '';
const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    UploadClothingPiece: UploadClothingPieceScreen,
    CreateAccount: CreateAccountScreen,
    Splash: SplashScreen,
    Setting: SettingScreen
  },
  {
    initialRouteName: "Splash",
  }
);

/*
const FirstTime = createSwitchNavigator(
  {
    Login: LoginScreen,
    Splash: SplashScreen
  },
  {
    initialRouteName: "Splash",
    defaultNavigationOptions: "Login"
  }
);
*/


const TabNavigator = createBottomTabNavigator(
  {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
      })
    },
  Setting: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Setting"
      })
    },

  Login: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: () => {
        NavigationActions.navigate({routeName: "Home"})
        }
      })
    },

  UploadClothingPiece: UploadClothingPieceScreen
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(TabNavigator);
//const App = createAppContainer(navigator);
//export default App;
