import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class UploadClothingPieceScreen extends Component{
  static navigationOptions = {
    title: 'UploadClothingPiece',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };
  render() {
    return(
      <View>
        <Text>UploadClothingPieceScreen</Text>
      </View>
    );
  }
}

export default UploadClothingPieceScreen;
