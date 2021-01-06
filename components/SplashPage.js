/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashPage = () => {
  const snowAnimation = require('../assets/lottie/31778-snowflake-loading-screen.json');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 50,
          color: '#79A3B1',
          fontFamily: '야놀자 야체 Regular',
        }}>
        홉송이
      </Text>
      <LottieView
        autoPlay
        style={{ height: 100, width: 100 }}
        source={snowAnimation}
      />
    </View>
  );
};

export default SplashPage;
