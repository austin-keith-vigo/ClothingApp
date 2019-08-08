import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanGestureHandler } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ClothingPieceContainer extends Component {

  state = { currentPiece: this.props.pieces[0] }
  currentPieceIndex = 0;

  nextPiece() {
    if (this.currentPieceIndex == this.props.pieces.length - 1){
      this.currentPieceIndex = 0;
    }
    else {
      ++this.currentPieceIndex;
    }

    console.log(this.currentPieceIndex);
    this.setState({ currentPiece: this.props.pieces[this.currentPieceIndex] });
  }

  previousPiece() {
    if (this.currentPieceIndex == 0) {
      this.currentPieceIndex = this.props.pieces.length - 1;
    }
    else {
      --this.currentPieceIndex;
    }

    console.log(this.currentPieceIndex);
    this.setState({ currentPiece: this.props.pieces[this.currentPieceIndex] });
  }

  viewStyle = {
    backgroundColor: "#800000",
    borderBottomWidth: 1,
    flex: this.props.flex
  };

  render() {
    return(
        <View style={this.viewStyle}>
          <GestureRecognizer
            onSwipeRight={() => this.previousPiece() }
            onSwipeLeft={() => this.nextPiece() }
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
