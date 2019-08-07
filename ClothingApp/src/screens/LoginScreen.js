import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LoginForm from './../components/LoginForm'

class LoginScreen extends Component {

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
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
          title="To Home"
          />
      </View>
    );
  }
}

export default LoginScreen;
