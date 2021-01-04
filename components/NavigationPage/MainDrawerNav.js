/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomePage from '../MainPage/HomePage';
import HobbyListPage from '../MainPage/HobbyListPage';
import HobbySharePage from '../MainPage/HobbySharePage';
import MyPage from '../MainPage/MyPage';
import WebViewPage from '../WebViewPage/WebViewPage';
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
      <Drawer.Screen name="HomePage">
        {(props) => <HomePage {...props} user={user} />}
      </Drawer.Screen>
      <Drawer.Screen name="HobbyListPage">
        {(props) => <HobbyListPage {...props} />}
      </Drawer.Screen>
      {/* <Drawer.Screen name="HobbyList" component={HobbyList} /> */}
      <Drawer.Screen name="HobbySharePage" component={HobbySharePage} />
      <Drawer.Screen name="MyPage" component={MyPage} />
      <Drawer.Screen name="WebViewPage" component={WebViewPage} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNav;
