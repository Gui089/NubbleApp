/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView} from 'react-native';
import { Text } from './src/Components/Text/Text';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text italic preset='headingLarge' style={{color:'purple'}}>Guilherme</Text>
      <Text bold preset='headingLarge' style={{color:'purple'}}>Guilherme</Text>
    </SafeAreaView>
  );
}




export default App;
