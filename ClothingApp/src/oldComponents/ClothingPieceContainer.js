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
    var databaseFilePath = 'users/'+userUID+'/'+this.props.pieceType;
    var databaseRef = firebase.database().ref(databaseFilePath);

    databaseRef.once('value').then((snapshot)=>{
      clothingPieceObject = Object.values(snapshot.val());
      this.imageFileNames = Object.keys(snapshot.val());
      for (index = 0; index < this.imageFileNames.length; ++index){
        const currentImage = this.imageFileNames[index];
        this.imageURLs.push(snapshot.val()[currentImage]['downloadURL']);
      }
      this.setState({ gotAllURLs:true, currentImageURL:this.imageURLs[0] });
    });
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
