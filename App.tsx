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
import { Box } from './src/Components/Box/Box';


function App(): JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
          <Text italic preset='headingLarge' style={{color:'black', alignSelf:'center'}}>Nubble-App</Text>
          <Box marginBottom='s24'>
            <Button title='Entrar'/>
          </Box>
          <Button title='loading' loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}




export default App;
