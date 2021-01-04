/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const webViewWidth = Dimensions.get('window').width;

const HobbyList = () => {
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
          uri:
            'https://search.shopping.naver.com/search/all?query=DIY%20%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98&frm=NVSHATC&prevQuery=%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98',
        }}
        style={{ flex: 1, width: webViewWidth }}
        startInLoadingState
        scalesPageToFit
      />
    </View>
  );
};

export default HobbyList;
