import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import firebase from 'firebase'
class SwipeableContainer extends Component {

  state = {
    imageSource: 'https://firebasestorage.googleapis.com/v0/b/my-closet-c4c42.appspot.com/o/defaultImage.png?alt=media&token=68f0d433-b8d4-48e1-a180-1f6a7bbf384d}'
  };

  downloadURLs = [];


  constructor(props){
    super(props);
    this.getDownloadURLs('shirts');
    console.log('end of constructor');
  }

  //Grab all the download url for each image
  getDownloadURLs(clothingPieceType){
    var databaseRef = firebase.database().ref('images/' + clothingPieceType);

    databaseRef.once('value')
    .then((snapshot)=>{
      //loop through the snapshot and grab all the download urls
      var tempDownloadURLs = [];
      for (index = 0; index < Object.keys(snapshot.val()).length; ++index){
        const currentItem = 'item' + index;
        const downloadURL = snapshot.val()[currentItem].downloadURL;
        tempDownloadURLs.push(downloadURL);
      }

      //Set class variables and re-render with new download urls
      this.downloadURLs = tempDownloadURLs;
      this.setState({ imageSource: this.downloadURLs[0] });

    })
    .catch((error)=>{
      console.log(error);
    });
  }



  render() {
    return(
      <GestureRecognizer
        style = {styles.gestureRecognizerStyle}
        onSwipeRight={()=>{
          this.setState({ imageSource: 'https://firebasestorage.googleapis.com/v0/b/my-closet-c4c42.appspot.com/o/button_up_shirt.jpeg?alt=media&token=40a69c28-cf7c-46ff-b178-bf774362833b'})
        }}
      >
        <Image
          source={{ uri: this.state.imageSource }}
          style={styles.imageStyle}
        />
      </GestureRecognizer>
    );
  }
}

let styles = StyleSheet.create({
  gestureRecognizerStyle: {
    backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1
  },
  imageStyle: {
    height: 40,
    width: 40
  }
});

export default SwipeableContainer
