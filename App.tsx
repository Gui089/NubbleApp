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


function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}




export default App;
