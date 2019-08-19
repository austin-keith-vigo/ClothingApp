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
import firebase from 'firebase';

username = '';
userUID = '';

const AppTabNavigator = createBottomTabNavigator({
  Login:  {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      title: "Login"
    })},
  Home:   {screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: "Home"
    })},
  Upload: {screen: UploadClothingPieceScreen,
    navigationOptions: ({navigation}) => ({
      title: "Upload"
    })},
  Setting:{screen: SettingScreen,
    navigationOptions: ({navigation}) => ({
      title: "Setting"
    })}
});

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: {
      headerMode: "none",
      header: null
      }
    },
  Splash: {screen: SplashScreen}
  },
  {
    initialRouteName: "Splash"
  }
);

const App = createAppContainer(StackNavigator);
export default App;
///works but not what we want
/*
const TabNavigator = createBottomTabNavigator(
  {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      tabBarOnPress: ({navigate, defaultHandler}) => {
        var user = firebase.auth().currentUser;
        if(user) {
          defaultHandler()
        } else {
          // have notification popup
        }
        }
      })
    },
  Setting: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Setting"
      })
    },
  Splash: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({navigate}) => {
        }
      })
    },
  UploadClothingPiece: UploadClothingPieceScreen,
});
*/

//const App = createAppContainer(navigator);
//export default App;
