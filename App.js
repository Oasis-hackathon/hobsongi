/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PageRouter from './components/PageRouter';

const App = () => {
  return (
    <NavigationContainer>
      <PageRouter />
    </NavigationContainer>
  );
};

export default App;
