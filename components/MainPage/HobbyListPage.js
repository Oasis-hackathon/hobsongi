/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';

const HobbyListPage = () => {
  const HobbyListHeight = Dimensions.get('window').height;
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
      <ScrollView>
        <View
          style={{
            height: HobbyListHeight,
            flexDirection: 'row',
          }}>
          <View style={{ borderWidth: 0.5, flex: 0.47 }}>
            <View style={{ borderWidth: 0.5, height: HobbyListHeight / 5 }}>
              <Image
                source={{
                  uri:
                    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjNfNDMg%2FMDAxNjA2MTA3NjgwNTY3.0dmh36Ntn8CxUOukg-ydWw6QBl6ElAkYGuBlCQFkSj8g.u2jVHORHxO-AeuXTL66M6AP85bF2OaWhPuGpR8rGFbkg.JPEG.fhzkxms%2FKakaoTalk_20201123_140002812.jpg&type=sc960_832',
                }}
                style={{ flex: 1 }}
              />
            </View>
            <View
              style={{ borderWidth: 0.5, height: HobbyListHeight / 5 }}></View>
            <View
              style={{ borderWidth: 0.5, height: HobbyListHeight / 5 }}></View>
            <View
              style={{ borderWidth: 0.5, height: HobbyListHeight / 5 }}></View>
            <View style={{ borderWidth: 0.5, height: HobbyListHeight / 5 }}>
              <Image
                source={{
                  uri:
                    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjNfNDMg%2FMDAxNjA2MTA3NjgwNTY3.0dmh36Ntn8CxUOukg-ydWw6QBl6ElAkYGuBlCQFkSj8g.u2jVHORHxO-AeuXTL66M6AP85bF2OaWhPuGpR8rGFbkg.JPEG.fhzkxms%2FKakaoTalk_20201123_140002812.jpg&type=sc960_832',
                }}
                style={{ flex: 1 }}
              />
            </View>
          </View>
          <View style={{ borderWidth: 0.5, flex: 0.53 }}>
            <Image
              source={{
                uri:
                  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjNfNDMg%2FMDAxNjA2MTA3NjgwNTY3.0dmh36Ntn8CxUOukg-ydWw6QBl6ElAkYGuBlCQFkSj8g.u2jVHORHxO-AeuXTL66M6AP85bF2OaWhPuGpR8rGFbkg.JPEG.fhzkxms%2FKakaoTalk_20201123_140002812.jpg&type=sc960_832',
              }}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HobbyListPage;
