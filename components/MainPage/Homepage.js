/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const HomePage = () => {
  const onUserLogOut = () => {
    Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
      { text: '확인', onPress: handleSignOut },
      { text: '취소' },
    ]);
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('유저 로그아웃'));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomePage</Text>
      <Button title="로그아웃" onPress={onUserLogOut} />
    </View>
  );
};

export default HomePage;
