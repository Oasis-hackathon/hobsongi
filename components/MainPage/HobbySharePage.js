/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

const HobbySharePage = () => {
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
        <Text style={{ fontSize: 30 }}>홉송이</Text>
      </View>
      <View style={{ marginBottom: 40 }} />
    </>
  );
};

export default HobbySharePage;