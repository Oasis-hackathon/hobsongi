/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MyCarousel from './MyCarousel';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomePage = ({
  user,
  navigation,
  hobby,
  randomNumber,
  randomNumberArray,
  setRandomNumber,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const generateRandomHobby = useCallback(() => {
    setRandomNumber(Math.floor(Math.random(randomNumberArray) * hobby.length));
  }, [hobby, randomNumberArray, setRandomNumber]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(100).then(() => {
      setRefreshing(false);
      generateRandomHobby();
    });
  }, [generateRandomHobby]);

  const jumpToAction = DrawerActions.jumpTo('WebViewPage', {
    hobby,
    randomNumber,
  });
  return (
    <>
      <View
        style={{
          borderWidth: 1,
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25 }}>당신을 위한 추천</Text>
      </View>
      <View style={{ marginBottom: 40 }} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.5, alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>
              {user && user._auth._user.displayName}님,
            </Text>
            <View style={{ marginBottom: 10 }} />

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                backgroundColor: 'green',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 8,
                textAlign: 'center',
              }}>
              {hobby && hobby[randomNumber].name}
            </Text>

            <View style={{ marginBottom: 10 }} />
            <Text style={{ fontSize: 20 }}>이런 취미는 {'\n'} 어떠세요?</Text>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.dispatch(jumpToAction)}>
              <Icon name="cart-minus" size={40} style={{ opacity: 0.5 }} />
            </TouchableOpacity>
          </View>
        </View>
        <MyCarousel hobby={hobby} randomNumber={randomNumber} />
      </ScrollView>
    </>
  );
};

export default HomePage;
