import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanGestureHandler } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ClothingPieceContainer extends Component {

  viewStyle = {
    backgroundColor: "#800000",
    borderBottomWidth: 1,
    flex: this.props.flex
  };

  render() {
    return(
        <View style={this.viewStyle}>
          <GestureRecognizer
            onSwipeRight={() => console.log("swiped right")}
            onSwipeLeft={() => console.log("swiped left")}
            style={{
              flex: 1
            }}
          >
          </GestureRecognizer>
        </View>
    );
  }
}


export default ClothingPieceContainer;
