import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return(
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
