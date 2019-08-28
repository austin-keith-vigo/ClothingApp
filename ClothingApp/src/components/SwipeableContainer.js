import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class SwipeableContainer extends Component {

  <Image source = {require('./images/defaultimage.png')} />

  render() {
    return(
      <View style={styles.viewStyle}>
        <GestureRecognizer
          onSwipeRight={()=>{
            console.log('swiped');
          }}
        >
        </GestureRecognizer>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'red',
    flex: 1
  },
  gestureRecognizerStyle: {
    backgroundColor: 'red',
    flex: 1
  }
});

export default SwipeableContainer
