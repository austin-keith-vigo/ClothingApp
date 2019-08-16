import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ClothingPieceContainer extends Component {
  state={ gotAllURLs:false, currentImageURL:''};
  imageFileNames=[];
  imageURLs=[];
  currentIndex=0;

  componentWillMount(){
    console.log(userUID);
    var databaseFilePath = 'users/'+userUID+'/'+this.props.pieceType;
    var databaseRef = firebase.database().ref(databaseFilePath);

    databaseRef.once('value').then((snapshot)=>{
      this.imageFileNames=Object.values(snapshot.val());
      this.getImageURLs();
    });
  }

  getImageURLs(){
    var storageFilePath = userUID+'/'+this.props.pieceType;

    for (index = 0; index < this.imageFileNames.length; index++) {
      var imageFilePath = storageFilePath+'/'+this.imageFileNames[index];
      var storageRef = firebase.storage().ref(imageFilePath);

      storageRef.getDownloadURL().then((url) => {
        this.imageURLs.push(url);
        if (this.imageURLs.length == this.imageFileNames.length){
          this.setState({ gotAllURLs:true, currentImageURL:this.imageURLs[0] });
          console.log(this.imageURLs);
        }
      });
    }
  }

  renderImage(){
    if (this.imageURLs.length == 0){
      return <Image source={require('./../images/defaultImage.png')}/>
    }
    else {
      return(
        <Image
          source={{ uri:this.state.currentImageURL }}
          style={{flex: 1}}
        />
      );
    }
  }

  viewStyle = {
    borderBottomWidth: 1,
    flex: this.props.flex
  };

  render() {
    return(
        <View style={this.viewStyle}>
          <GestureRecognizer
            onSwipeRight={()=>{
              if (this.state.gotAllURLs == true){
                if (this.currentIndex <= 0){
                  this.currentIndex = this.imageURLs.length - 1;
                }
                else {
                  this.currentIndex--;
                }
                this.setState({ currentImageURL:this.imageURLs[this.currentIndex ]});
              }
            }}
            onSwipeLeft={()=>{
              if (this.state.gotAllURLs == true){
                if (this.currentIndex >= this.imageURLs.length - 1){
                  this.currentIndex = 0;
                }
                else {
                  this.currentIndex++;
                }
                this.setState({ currentImageURL:this.imageURLs[this.currentIndex] });
              }
            }}
            style={{ flex: 1 }}
          >
            {this.renderImage()}
          </GestureRecognizer>
        </View>
    );
  }
}

export default ClothingPieceContainer;
