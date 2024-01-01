import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from '../../routes';

const AppMain = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
};

export default AppMain;
