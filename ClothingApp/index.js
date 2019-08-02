import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import ClothingPeiceSection from "./components/ClothingPeiceSection";


const App = () => {
  return(
    <View>
      <ClothingPeiceSection/>
      <ClothingPeiceSection/>
      <ClothingPeiceSection/>
    </View>
  );
};

AppRegistry.registerComponent('ClothingApp', () => App);
