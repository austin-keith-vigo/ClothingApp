import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class UploadClothingPieceScreen extends Component{

  state = {
    imgSource: ''
  };

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

  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source
        });
      }
    });
  };

  uploadImage = () => {
  };

  render() {
    return(
      <View>
        <Text>UploadClothingPieceScreen</Text>
        <Button
          title="new clothing piece"
          onPress={this.uploadClothingPiece}
        />
        {/** Select Image button */}
        <TouchableOpacity style={styles.btn} onPress={this.pickImage}>
          <View>
            <Text style={styles.btnTxt}>Pick image</Text>
          </View>
        </TouchableOpacity>
        {/** Display selected image */}
        {this.state.imgSource ? (
          <View>
            <Image
              source={this.state.imgSource}
              style={styles.image}
            />
            <Button
              title="upload image"
              onPress={this.uploadImage()}
            />
          </View>
        ) : (
         <Text>Select an Image!</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  btn: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgb(68, 99, 147)'
  },
  btnTxt: {
    color: '#fff'
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200
  }
});

export default UploadClothingPieceScreen;
