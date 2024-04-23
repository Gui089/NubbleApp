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
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/Components/icon/Icon';

function App(): JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
        <Icon name='eyeOn'/>
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
