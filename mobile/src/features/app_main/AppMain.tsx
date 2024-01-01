import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const AppMain = () => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
      />
    </SafeAreaView>
  );
};

export default AppMain;
