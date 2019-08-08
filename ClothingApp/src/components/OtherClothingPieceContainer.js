import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class OtherClothingPieceContainer extends Component{
  render() {
    return(
      <TouchableOpacity style={styles.containerStyle}/>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "blue",
    borderBottomWidth: 1,
    flex: 1
  }
});

export default OtherClothingPieceContainer;
