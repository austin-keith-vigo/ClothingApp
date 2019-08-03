import React, {Component} from 'react';
import { View, Text  } from 'react-native';
import firebase from 'react-native-firebase';

class ClothingPeiceSection extends Component{
  state = { clothes: [] };

  componentWillMount(){
    console.log(this.props.clothingPeice);
    //Grab all images of that article of clothing
    firebase.databse.child("users/austin.keith.vigo@gmail.com/tops");
  }

  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>
          {this.props.clothingPeice}
        </Text>
      </View>
    );
  }
}

const styles={

};

export default ClothingPeiceSection;
