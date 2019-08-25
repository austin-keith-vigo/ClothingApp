import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import InputField from './InputField';

class EmailPasswordForm extends Component {

  state = { email: '', password: '' };

  renderErrorMessage(){
    if(this.props.displayErrorMessage == true){
      return <Text>{this.props.errorMessage}</Text>
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
