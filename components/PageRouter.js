/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from './AuthPage/AuthPage';
import MainDrawerNav from './MainDrawerNav';
import auth from '@react-native-firebase/auth';

const PageRouter = () => {
  const Stack = createStackNavigator();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    console.log(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="AuthPage">
          {(props) => <AuthPage {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainDrawerNav">
          {(props) => <MainDrawerNav {...props} user={user} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default PageRouter;
