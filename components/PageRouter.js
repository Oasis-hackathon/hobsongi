/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from './AuthPage/AuthPage';
import Homepage from './MainPage/Homepage';
import HobbyList from './MainPage/HobbyList';
import ReviewPage from './MainPage/ReviewPage';
import TalkPage from './MainPage/TalkPage';
import Page from './MainPage/Page';

const PageRouter = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Page" component={Page} /> */}
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="HobbyList" component={HobbyList} />
      <Stack.Screen name="ReviewPage" component={ReviewPage} />
      <Stack.Screen name="TalkPage" component={TalkPage} />
    </Stack.Navigator>
  );
};

export default PageRouter;
