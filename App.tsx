/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider} from '@shopify/restyle';
import { theme } from './src/theme/Theme';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SingUpScreen } from './src/screens/auth/SingUpScreen/SingnUpScree';
import { Router } from './src/routes/Routes';
import { Toast } from '@Components';


function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}




export default App;
