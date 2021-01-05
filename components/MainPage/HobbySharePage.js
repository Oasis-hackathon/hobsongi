/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HobbySharePage = ({ user }) => {
  const Height = Dimensions.get('window').height;
  console.log(user);
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
      <ScrollView>
        <View style={{ flex: 1, height: Height + 100 }}>
          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: 'white',
              elevation: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Image
                source={{
                  uri:
                    'http://gravatar.com/avatar/c225ca750fad59c122db5d01fd40f4fb?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>홉송이1</Text>
                <Text style={{ color: 'gray' }}>@skskff@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTZfNzUg%2FMDAxNjAwMjY2OTgyMTg2.F1sAj_FUnpfZuQm6G9UpJFf6jciP5sAmxZhp0gl1xlsg.Dgk4J46NFgcYNi75e0svWsYouRlulmLaoWi-ObPrPAcg.JPEG.1128hannah%2Foutput_2912684813.jpg&type=sc960_832',
              }}
              style={{
                width: 300,
                height: 200,
                borderRadius: 15,
                marginBottom: 5,
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Icon name="heart-outline" size={25} style={{ opacity: 0.5 }} />
              <Icon name="message-outline" size={25} style={{ opacity: 0.5 }} />
            </View>
            <Text style={{ color: 'gray' }}>
              #피포페인팅 #퍼즐페인팅 #같이해봐요 #코로나
            </Text>
          </View>

          <View style={{ marginBottom: 20 }} />

          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: 'white',
              elevation: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Image
                source={{
                  uri:
                    'http://gravatar.com/avatar/1e9c0c61026c7cde74b43d51d8639d7f?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>홉송이2</Text>
                <Text style={{ color: 'gray' }}>@tkdqja4122@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjZfMTk5%2FMDAxNjAzNzA1OTg2MDIw.qBNqRJTB-2y8DpuMniFstEeD4UDTNO-dj28Ca7lQ-fEg.weyP4dy2uyM70EgQWqbnsBonXrIaEsn00uli4Z7M0pwg.JPEG.h264175%2FKakaoTalk_20201026_183340625.jpg&type=sc960_832',
              }}
              style={{
                width: 300,
                height: 200,
                borderRadius: 15,
                marginBottom: 5,
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Icon name="heart" size={25} style={{ opacity: 0.5 }} />
              <Icon name="message-outline" size={25} style={{ opacity: 0.5 }} />
            </View>
            <Text style={{ color: 'gray' }}>
              #테라리움 만들기 #원예활동 #같이취미해요
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HobbySharePage;
