/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomePage from './MainPage/HomePage';
import HobbyList from './MainPage/HobbyList';
import ReviewPage from './MainPage/ReviewPage';
import TalkPage from './MainPage/TalkPage';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MainDrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: 'white',
        width: 80,
      }}
      drawerContentOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'red',
        itemStyle: { backgroundColor: 'gray', borderRadius: 40, height: 60 },
      }}>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="HobbyList" component={HobbyList} />
      <Drawer.Screen name="ReviewPage" component={ReviewPage} />
      <Drawer.Screen name="TalkPage" component={TalkPage} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNav;
