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
        backgroundColor: '#79A3B1',
      }}>
      <Text style={{ fontSize: 43, color: 'white' }}>홉송이</Text>
      <LottieView
        autoPlay
        style={{ height: 100, width: 100 }}
        source={snowAnimation}
      />
    </View>
  );
};

export default SplashPage;
