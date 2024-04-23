/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { Text} from './src/Components/Text/Text';
import { Button } from './src/Components/Button/Button';
import { ThemeProvider, useTheme } from '@shopify/restyle';
import { theme } from './src/theme/Theme';
import { Icon } from './src/Components/icon/Icon';

function App(): JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
        <Icon size={40} name='eyeOn' color='backgroundContrast' />
          <Text preset='headingLarge' style={{color:'black', alignSelf:'center'}}>Nubble-App</Text>
            <Button marginBottom='s24' title='Entrar'/>
            <Button title='loading' loading />
            <Button marginTop='s24' title='outline' preset='outline' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}




export default App;
