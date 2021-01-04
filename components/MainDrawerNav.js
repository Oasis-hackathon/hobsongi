/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomePage from './MainPage/HomePage';
import HobbyList from './MainPage/HobbyList';
import ReviewPage from './MainPage/ReviewPage';
import TalkPage from './MainPage/TalkPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

const MainDrawerNav = ({ user }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'red',
        itemStyle: { backgroundColor: 'gray', borderRadius: 40, height: 60 },
      }}
      drawerContent={(props) => <DrawerContent {...props} user={user} />}>
      <Drawer.Screen name="HomePage" component={HomePage} user={user} />
      {/* <Drawer.Screen name="HomePage">
        {(props) => <HomePage {...props} user={user} />}
      </Drawer.Screen> */}
      <Drawer.Screen name="HobbyList" component={HobbyList} />
      <Drawer.Screen name="ReviewPage" component={ReviewPage} />
      <Drawer.Screen name="TalkPage" component={TalkPage} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNav;
