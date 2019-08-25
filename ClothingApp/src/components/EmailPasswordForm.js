import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import InputField from './InputField';
import Dialog from 'react-native-dialog';

class EmailPasswordForm extends Component {

  state = { email: '', password: '', popupOpen: false};

  renderErrorMessage(){
    if(this.props.displayErrorMessage == true){
      return(
        <Dialog.Container visible = {true}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            {this.props.errorMessage}
          </Dialog.Description>
          <Dialog.Button
            label="Close"
            onPress = {()=>{
              console.log('close popup');
            }}
          />
        </Dialog.Container>
      )
    }
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <InputField
          placeholder='email'
          onChangeText={text => this.setState({ email: text })}
        />
        <InputField
          placeholder='password'
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          title='Submit'
          onPress={()=>{this.props.loginUser(this.state.email, this.state.password)}}
        />
        {this.renderErrorMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    justifyContent: 'center'
  }
})

export default EmailPasswordForm;
