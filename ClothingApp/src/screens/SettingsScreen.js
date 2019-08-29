import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import SettingsButton from './../components/SettingsButton';
import firebase from 'firebase';

class SettingsScreen extends Component{

  //Navigation settings
  static navigationOptions = {
    title: 'Settings',
    gesturesEnabled: false,
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  _clearAsyncStorage = async() => {
    await AsyncStorage.clear();
  };

  //Will logout the user from the app and send them back to the login screen
  logoutButtonPressed(){
    var user = firebase.auth().currentUser;
    if (user) {
      this._clearAsyncStorage();
      firebase.auth().signOut();
      console.log('im out');
      this.props.navigation.navigate('Login')
    } else {
      console.log('no one in');
    }
  };

  render(){
    return(
      <View style = {styles.viewStyle}>
        <SettingsButton
          title='Logout'
          onPress={this.logoutButtonPressed.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {
    height: 20,
    width: '100%'
  }
});

export default SettingsScreen;
