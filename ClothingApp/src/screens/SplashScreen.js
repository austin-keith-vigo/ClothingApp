import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';

class SplashScreen extends Component{
  //
  // constructor(props){
  //   super(props);
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyC0JR6pVP6v0JcX0NwCm5f-ZsEYQe-Ydbk",
  //     authDomain: "my-closet-c4c42.firebaseapp.com",
  //     databaseURL: "https://my-closet-c4c42.firebaseio.com",
  //     projectId: "my-closet-c4c42",
  //     storageBucket: "gs://my-closet-c4c42.appspot.com",
  //     messagingSenderId: "870899532598",
  //     appId: "1:870899532598:web:03be0160a5aa15e5"
  //   })
  //   .then(()=>{
  //     console.log('it worked')
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
  // }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0JR6pVP6v0JcX0NwCm5f-ZsEYQe-Ydbk",
      authDomain: "my-closet-c4c42.firebaseapp.com",
      databaseURL: "https://my-closet-c4c42.firebaseio.com",
      projectId: "my-closet-c4c42",
      storageBucket: "gs://my-closet-c4c42.appspot.com",
      messagingSenderId: "870899532598",
      appId: "1:870899532598:web:03be0160a5aa15e5"
    });
  }

  render(){
    return(
      <View style={styles.viewStyle}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    backgroundColor: 'red'
  }
})

export default SplashScreen;
