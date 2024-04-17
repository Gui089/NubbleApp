/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Text } from './src/Components/Text/Text';


function App(): JSX.Element {

  return (
    <View>
      <Text preset='headingLarge' style={{color:'purple'}}>Guilherme</Text>
      <Text preset='headingLarge' style={{color:'purple', fontFamily:'Satoshi-Black'}}>Guilherme</Text>
    </View>
  );
}




export default App;
