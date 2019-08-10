import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import firebase from 'firebase';

class ClothingPieceContainer extends Component {

  state = { currentPiece: 'none', pieces:[], imageURL: '' }
  currentPieceIndex = 0;

  componentWillMount(){
    var databaseRef = firebase.database().ref('users/austinvigo/' + this.props.pieceType);

    databaseRef.once('value').then((snapshot) => {
      Object.values(snapshot.val())
      this.setState({
        currentPiece: Object.values(snapshot.val())[0],
        pieces: Object.values(snapshot.val())
      });
      this.getImageURL(this.state.currentPiece);
    });
  }

  getImageURL(imageFileName){
      var imageFilePath = 'austinvigo/'+this.props.pieceType+'/'+imageFileName;
      var storageRef = firebase.storage().ref(imageFilePath);

      storageRef.getDownloadURL().then((url) => {
        this.setState({ imageURL: url });
      }).catch((error) => {
        console.log(error);
      });
  }

  nextPiece() {
    if (this.currentPieceIndex == this.state.pieces.length - 1){
      this.currentPieceIndex = 0;
    }
    else {
      ++this.currentPieceIndex;
    }

    this.setState({
      currentPiece: this.state.pieces[this.currentPieceIndex]
    });
    this.getImageURL(this.state.currentPiece);
  }

  previousPiece() {
    if (this.currentPieceIndex == 0) {
      this.currentPieceIndex = this.state.pieces.length - 1;
    }
    else {
      --this.currentPieceIndex;
    }

    this.setState({
      currentPiece: this.state.pieces[this.currentPieceIndex]
    });
    this.getImageURL(this.state.currentPiece);
  }

  setImage(){
    if(this.state.pieces.length == 0){
      return <Text>nothing</Text>;
    }
    return(
      <Image
        source={{ uri: this.state.imageURL }}
        style={styles.imageStyle}
      />
    );
  };

  viewStyle = {
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
    flex: 1
  }
});

export default ClothingPieceContainer;
