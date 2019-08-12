import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import LoginForm from './../components/LoginForm';

class LoginScreen extends Component {

  componentWillMount() {

  }

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
        <LoginForm navigationProp={this.props.navigation}/>
        <Button
          onPress={()=>{
            this.props.navigation.navigate('Home')
          }}
          title="To Home"
        />
        <Button
          onPress={()=>{
            this.props.navigation.navigate('UploadClothingPiece');
          }}
          title="to UploadClothingPieceScreen"
        />
        <Button
          onPress={()=>{
            this.props.navigation.navigate('CreateAccount');
          }}
          title="to CreateAccountScreen"
        />
      </View>
    );
  }
}

export default LoginScreen;
