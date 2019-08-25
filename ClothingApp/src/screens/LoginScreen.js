import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import EmailPasswordForm from './../components/EmailPasswordForm';
import firebase from 'firebase';

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

  render() {
    return(
      <View style={styles.viewStyle}>
        <EmailPasswordForm
          loginUser={this.loginUser.bind(this)}
          displayErrorMessage={this.state.error}
          errorMessage={this.state.errorMessage}
        />
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
