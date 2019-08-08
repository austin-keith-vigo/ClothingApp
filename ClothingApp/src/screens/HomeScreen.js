import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ClothingPieceContainer from './../components/ClothingPieceContainer';

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
        <ClothingPieceContainer flex={2}/>
        <ClothingPieceContainer flex={2}/>
        <ClothingPieceContainer flex={1}/>
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
