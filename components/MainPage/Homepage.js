/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Image,
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
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#79A3B1',
          elevation: 5,
        }}>
        <Text style={{ fontSize: 25, color: 'white' }}>당신을 위한 추천</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{
          backgroundColor: '#79A3B1',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#D0E8F2',
            marginHorizontal: 20,
            marginTop: 30,
            borderRadius: 15,
            height: 160,
            elevation: 5,
          }}>
          <View style={{ marginLeft: 50, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              {user && user._auth._user.displayName}님,
            </Text>
            <View style={{ marginBottom: 10 }} />

            <Text
              style={{
                color: 'gray',
                fontSize: 20,
                paddingVertical: 5,
                borderRadius: 8,
                fontWeight:'700'
              }}>
              {hobby && hobby[randomNumber].name}
            </Text>

            <View style={{ marginBottom: 10 }} />
            <Text style={{ fontSize: 20, fontFamily: '', fontWeight: '700' }}>
              이런 취미는 어떠세요?
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.dispatch(jumpToAction)}>
              {/* <Icon name="cart-minus" size={40} style={{ opacity: 0.5 }} /> */}
              <Image
                source={require('../../assets/img/shopping_cart.png')}
                style={{
                  width: 60,
                  height: 60,
                  marginBottom: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <MyCarousel hobby={hobby} randomNumber={randomNumber} />
      </ScrollView>
    </>
  );
};

export default HomePage;
