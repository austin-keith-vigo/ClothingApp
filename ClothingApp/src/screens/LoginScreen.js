import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import EmailPasswordForm from './../components/EmailPasswordForm';

class LoginScreen extends Component {

  /*
  Will login in the user into firebase. Gets the email and password from
  the email password form.
  */
  loginUser(email, password){
    console.log("loginUser");
    console.log(email);
    console.log(password);
  }

  render() {
    return(
      <View style={styles.viewStyle}>
        <EmailPasswordForm
          loginUser={this.loginUser}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1
  }
});

export default LoginScreen;
