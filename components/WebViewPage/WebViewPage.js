/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const webViewWidth = Dimensions.get('window').width;

const HobbyList = ({ route }) => {
  console.log(route.params.hobby[route.params.randomNumber].link)
  return (
    <View
      style={{
        flex: 1,
        width: webViewWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
      }}>
      <WebView
        source={{
          uri: route.params.hobby[route.params.randomNumber].link,
        }}
        style={{ flex: 1, width: webViewWidth }}
        startInLoadingState
        scalesPageToFit
      />
    </View>
  );
};

export default HobbyList;
