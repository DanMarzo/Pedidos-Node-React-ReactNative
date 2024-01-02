import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from '../../routes';
import AuthProvider from '../../context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

const AppMain = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <StatusBar
            backgroundColor="#1d1d2e"
            barStyle="light-content"
            translucent={false}
          />
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default AppMain;
