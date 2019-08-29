import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import EmailPasswordForm from './../components/EmailPasswordForm';
import firebase from 'firebase';
import Dialog from 'react-native-dialog';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    gesturesEnabled: false,
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  state = { error: false, errorMessage: '', logginIn: false };

  /*
  Will login in the user into firebase. Gets the email and password from
  the email password form.
  */
  loginUser(email, password){
    this.setState({logginIn: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      this.setState({ error : false, errorMessage: '', logginIn: false });
      AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    })
    .catch((error)=>{
      //Display error message with conditional rendering
      this.setState({ error : true, errorMessage: error.message, logginIn: false });
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

  /*
  Conditional Rendering to determine display an acivity monitor when the system
  is loggin in
  */
  renderActivityMonitor(){
    if(this.state.logginIn == false){
      return(
        <EmailPasswordForm
          loginUser={this.loginUser.bind(this)}
        />
      );
    }
    else{
      return(
        <ActivityIndicator size="large" color="#0000ff" />
      );
    }
  }
  render() {
    return(
      <View style={styles.viewStyle}>
        {this.renderActivityMonitor()}
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
