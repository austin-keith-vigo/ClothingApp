import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
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

  //Will logout the user from the app and send them back to the login screen
  logoutButtonPressed(){
    var user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().signOut();
      console.log('im out');
      this.props.navigation.navigate('Login')
    } else {
      console.log('no one in');
    }
  }

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
    flex: 1
  },
  buttonStyle: {
    height: 20,
    width: '100%'
  }
});

export default SettingsScreen;