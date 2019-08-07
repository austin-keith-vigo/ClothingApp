import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
        <Button
          title="To Login"
          onPress={() => {this.props.navigation.navigate('Login')}}
        />
      </View>
    );
  }
}

export default HomeScreen;
