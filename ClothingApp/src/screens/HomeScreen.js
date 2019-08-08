import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ClothingPieceContainer from './../components/ClothingPieceContainer';

class HomeScreen extends Component{
  shirts=['black shirt','red shirt', 'green shirt'];
  jeans=['black jeans', 'denim jeans', 'khakis'];
  shoes=['Air Force 1s', 'Air Max 90s', 'High Top Converse'];

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return(
      <View style={styles.viewStyle}>
        <ClothingPieceContainer
          flex={2}
          pieces={this.shirts}
        />
        <ClothingPieceContainer
          flex={2}
          pieces={this.jeans}
        />
        <ClothingPieceContainer
          flex={1}
          pieces={this.shoes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
});

export default HomeScreen;
