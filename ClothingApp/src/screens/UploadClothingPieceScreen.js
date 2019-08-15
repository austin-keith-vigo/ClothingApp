import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import firebase from 'firebase';

class UploadClothingPieceScreen extends Component{
  static navigationOptions = {
    title: 'UploadClothingPiece',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  /*
  Handles uploading a new file to the user's firebase storage
  */
  uploadClothingPiece(){
    var newClothingPieceType = 'accesories';
    var imageFileName = 'newAccessory.jpeg';

    //Update Database
    var databaseRef = firebase.database().ref("users/" + userUID + '/' + newClothingPieceType);
    databaseRef.set({
      item0: imageFileName
    });

    //Update storage
    var storageRef = firebase.storage().ref(userUID + '/' + newClothingPieceType+'/'+imageFileName);
    var file = new Blob([newClothingPieceType],{type:'text/plain'});
    storageRef.put(file)
    .then(()=>{
      console.log("done");
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return(
      <View>
        <Text>UploadClothingPieceScreen</Text>
        <Button
          title="new clothing piece"
          onPress={this.uploadClothingPiece}
        />
      </View>
    );
  }
}

export default UploadClothingPieceScreen;
