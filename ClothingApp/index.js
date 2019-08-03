import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import ClothingPeiceSection from "./components/ClothingPeiceSection";
import firebase from 'react-native-firebase';
const App = () => {
  return(
    <View>
      <ClothingPeiceSection clothingPeice={"tops"}/>
      <ClothingPeiceSection clothingPeice={"bottoms"}/>
      <ClothingPeiceSection clothingPeice={"shoes"}/>
    </View>
  );
};

AppRegistry.registerComponent('ClothingApp', () => App);
