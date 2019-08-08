import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



class ClothingPieceContainer extends Component {

  viewStyle = {
    backgroundColor: "#800000",
    borderBottomWidth: 1,
    flex: this.props.flex
  };

  render() {
    return(
      <View style={this.viewStyle}></View>
    );
  }
}


export default ClothingPieceContainer;
