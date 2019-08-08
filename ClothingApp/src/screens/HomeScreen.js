import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainClothingPieceContainer from './../components/MainClothingPieceContainer';
import OtherClothingPieceContainer from './../components/OtherClothingPieceContainer'
class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return(
      <View style={styles.viewStyle}>
        <MainClothingPieceContainer />
        <MainClothingPieceContainer />
        <OtherClothingPieceContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
});

export default HomeScreen;
