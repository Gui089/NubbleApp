/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { TextStyle, View } from 'react-native';
import { Text } from './src/Components/Text/Text';


function App(): JSX.Element {

  return (
    <View>
      <Text style={fontText.headingLarge} >Guilherme</Text>
    </View>
  );
}

type TextProps = 
  'headingLarge'
  | 'headingMedium' 
  | 'headingSmall' 
  | 'paragraphLarge' 
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  |'paragraphCaptionSmall'


const fontText: Record<TextProps, TextStyle > = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize:16, lineHeight: 22.4 },
  paragraphSmall: {fontSize:14, lineHeight: 19.6 },

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize:10, lineHeight:14 }
}


export default App;
