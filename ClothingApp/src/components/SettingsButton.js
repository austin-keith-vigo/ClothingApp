import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class SettingsButton extends Component {

  render(){
    return(
      <Button
        title={this.props.title}
        onPress={this.props.onPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 10,
    width: '100%',
    backgroundColor: 'blue'
  }
});

export default SettingsButton;
