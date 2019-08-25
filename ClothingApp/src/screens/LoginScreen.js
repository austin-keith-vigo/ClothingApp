import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import EmailPasswordForm from './../components/EmailPasswordForm';
import firebase from 'firebase';
import Dialog from 'react-native-dialog';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  state = { error: false, errorMessage: '' };

  /*
  Will login in the user into firebase. Gets the email and password from
  the email password form.
  */
  loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      this.props.navigation.navigate('Home');
    })
    .catch((error)=>{
      //Display error message with conditional rendering
      this.setState({ error : true, errorMessage: error.message });
    });
  }

  /*
  Conditional rendering to deterimine if an error message is rendered
  */
  renderErrorMessage(){
    if(this.state.error == true){
      return(
        <Dialog.Container visible = {true}>
          <Dialog.Title>Incorrect Login</Dialog.Title>
          <Dialog.Description>
            {this.state.errorMessage}
          </Dialog.Description>
          <Dialog.Button
            label="Close"
            onPress = {()=>{
              this.setState({ error: false });
            }}
          />
        </Dialog.Container>
      )
    }
  }
  render() {
    return(
      <View style={styles.viewStyle}>
        <EmailPasswordForm
          loginUser={this.loginUser.bind(this)}
        />
        {this.renderErrorMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    justifyContent: 'center'
  },
});

export default LoginScreen;
