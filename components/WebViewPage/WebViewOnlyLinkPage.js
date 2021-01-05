/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const webViewWidth = Dimensions.get('window').width;

const WebViewOnlyLinkPage = ({ route }) => {
  const hobbyInfo = route.params.hobbyInfo;
  return (
    <View
      style={{
        flex: 1,
        width: webViewWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <WebView
        source={{
          uri: hobbyInfo.link,
        }}
        style={{ flex: 1, width: webViewWidth }}
        startInLoadingState
        scalesPageToFit
      />
    </View>
  );
};

export default WebViewOnlyLinkPage;
