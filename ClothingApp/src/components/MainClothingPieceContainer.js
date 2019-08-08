import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MainClothingPieceContainer extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.containerStyle}/>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#800000",
    borderBottomWidth: 1,
    flex: 2
  }
});

export default MainClothingPieceContainer;
