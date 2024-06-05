/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider} from '@shopify/restyle';
import { theme } from './src/theme/Theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routes/Routes';
import { Toast } from '@Components';
import { ToastProvider } from '@services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}




export default App;
