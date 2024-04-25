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


function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SingUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}




export default App;
