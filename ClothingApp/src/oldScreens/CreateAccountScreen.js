import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import CreateAccountForm from './../components/CreateAccountForm';

class CreateAccountScreen extends Component {

  static navigationOptions = {
    title: 'Create Account',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return(
      <View>
        <CreateAccountForm navigationProp={this.props.navigation}/>
      </View>
    );
  }
}

export default CreateAccountScreen;
