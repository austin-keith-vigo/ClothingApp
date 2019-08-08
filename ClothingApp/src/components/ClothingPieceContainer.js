import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanGestureHandler } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ClothingPieceContainer extends Component {

  state = { currentPiece:this.props.pieces[0] }

  viewStyle = {
    backgroundColor: "#800000",
    borderBottomWidth: 1,
    flex: this.props.flex
  };

  render() {
    return(
        <View style={this.viewStyle}>
          <GestureRecognizer
            onSwipeRight={() => this.setState({ currentPiece:this.props.pieces[1]}) }
            onSwipeLeft={() => this.setState({ currentPiece:this.props.pieces[1]}) }
            style={{
              flex: 1
            }}
          >
            <Text>{this.state.currentPiece}</Text>
          </GestureRecognizer>
        </View>
    );
  }
}


export default ClothingPieceContainer;
