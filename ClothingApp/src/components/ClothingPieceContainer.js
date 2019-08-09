import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import firebase from 'firebase';

class ClothingPieceContainer extends Component {

  state = { currentPiece: 'none', pieces:[] }
  currentPieceIndex = 0;

  componentWillMount(){
    var databaseRef = firebase.database().ref('users/austinvigo/' + this.props.pieceType);

    databaseRef.once('value').then((snapshot) => {
      Object.values(snapshot.val())
      this.setState({
        currentPiece: Object.values(snapshot.val())[0],
        pieces: Object.values(snapshot.val())
      });
    });
  }

  nextPiece() {
    if (this.currentPieceIndex == this.state.pieces.length - 1){
      this.currentPieceIndex = 0;
    }
    else {
      ++this.currentPieceIndex;
    }

    console.log(this.currentPieceIndex);
    this.setState({ currentPiece: this.state.pieces[this.currentPieceIndex] });
  }

  previousPiece() {
    if (this.currentPieceIndex == 0) {
      this.currentPieceIndex = this.state.pieces.length - 1;
    }
    else {
      --this.currentPieceIndex;
    }

    console.log(this.currentPieceIndex);
    this.setState({ currentPiece: this.state.pieces[this.currentPieceIndex] });
  }

  setImage(){
    if(this.state.pieces.length == 0){
      return <Text>nothing</Text>;
    }

    imageFilePath = './../' + this.props.pieceType + '/' + this.state.currentPiece;

    return(
      <Image
        source={require(imageFilePath)}
        style={styles.imageStyle}
      />
    );
  };

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
            {this.setImage()}
            <Text>{this.state.currentPiece}</Text>
          </GestureRecognizer>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    backgroundColor: "#800000"
  }
});

export default ClothingPieceContainer;
