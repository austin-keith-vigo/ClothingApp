import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import SwipeableContainer from './../components/SwipeableContainer';

class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    gesturesEnabled: false,
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };
  render(){
    return(
      <View style = {styles.viewStyle}>
        <SwipeableContainer
          clothingType='shirts'
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
        />
        <SwipeableContainer
          clothingType='jeans'
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1
  }
});

export default HomeScreen;
