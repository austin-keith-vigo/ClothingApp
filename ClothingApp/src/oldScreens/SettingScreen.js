import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import firebase from 'firebase';

class SettingScreen extends Component {

  buttonPressed(){
    var user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().signOut();
      console.log('im out');
      this.props.navigation.navigate('Login')
    } else {
      console.log('no one in');
    }
  }

  render() {
    return (
      <View>
        <Text>IM HERE</Text>
        <Button
          title = "Sign Out"
          onPress = {this.buttonPressed.bind(this)}
        />
        <Button
          title = "Upload Clothing"
          onPress = {() =>{
            this.props.navigation.navigate('UploadClothingPiece')
          }}
        />
      </View>
    );
  }
}


export default SettingScreen
