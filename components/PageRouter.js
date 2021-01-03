/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from './AuthPage/AuthPage';
import Page from './MainPage/Page';
import MainDrawerNav from './MainDrawerNav';

const PageRouter = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Page" component={Page} /> */}
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="MainDrawerNav" component={MainDrawerNav} />
    </Stack.Navigator>
  );
};

export default PageRouter;
