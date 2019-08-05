import React, { Component } from 'react';
import { View, Text } from 'react-native'
import LoginForm from './components/LoginForm';
class App extends Component {
  render() {
    return(
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default App;
