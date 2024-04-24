/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { ThemeProvider} from '@shopify/restyle';
import { theme } from './src/theme/Theme';
import { Text } from './src/Components/Text/Text';
import { Box } from './src/Components/Box/Box';
import { Button } from './src/Components/Button/Button';
import { TextInput } from './src/Components/TextInput/TextInput';


function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
            <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
            <Text marginBottom='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>

          <Box marginBottom='s20'>
            <TextInput
              errorMessage='Mensagem de erro'
              label='Email'
              placeholder='Digite seu e-mail' 
             />
          </Box>

          <Box marginBottom='s20'>
            <TextInput 
              
              label='Senha'
              placeholder='Digite sua senha' 
              />
          </Box>

            <Text bold marginTop='s10' color='primary' preset='paragraphSmall'>Esqueci minhan senha</Text>

            <Button marginTop='s48' title='Entrar' />
            <Button preset='outline' marginTop='s12' title='Criar uma conta'/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}




export default App;
