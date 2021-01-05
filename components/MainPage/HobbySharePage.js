/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HobbySharePage = ({ user }) => {
  const Height = Dimensions.get('window').height;
  console.log(user);
  return (
    <>
      <ScrollView>
        <View style={{ flex: 1, height: Height * 3 + 300 }}>
          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: '#D0E8F2',
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
              backgroundColor: '#D0E8F2',
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

          <View style={{ marginBottom: 20 }} />

          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: '#D0E8F2',
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
                    'http://gravatar.com/avatar/822dfd2681e0c4e1f0d0332d8c982ec2?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>코로나싫어</Text>
                <Text style={{ color: 'gray' }}>@fkssf12@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://img1.tmon.kr/cdn3/deals/2019/04/20/1804576738/front_d7ff6_sdd7g.jpg',
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
              #테라리움 #새로운 취미 #초록정원
            </Text>
          </View>

          <View style={{ marginBottom: 20 }} />

          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: '#D0E8F2',
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
                    'http://gravatar.com/avatar/87184013f6b23340df0d7c97ff554e32?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>코딩좋아</Text>
                <Text style={{ color: 'gray' }}>@tsff231@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://www.aesdes.org/wp-content/uploads/2020/03/Capture.jpg',
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
            <Text style={{ color: 'gray' }}>#레진아트 #영롱 #예쁨</Text>
          </View>

          <View style={{ marginBottom: 20 }} />

          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: '#D0E8F2',
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
                    'http://gravatar.com/avatar/cbe45ef10340675d31769ce59fb025e8?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>홉송이가</Text>
                <Text style={{ color: 'gray' }}>@hobsongi@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200911_45%2F1599814070034RGtE7_JPEG%2FTB2MUH5dBcXBuNjt_biXXXpmpXa_3039962413.jpg&type=sc960_832',
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
              #페이퍼커팅 #칼조심 #무드등 #분위기
            </Text>
          </View>

          <View style={{ marginBottom: 20 }} />

          <View
            style={{
              height: 350,
              padding: 25,
              backgroundColor: '#D0E8F2',
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
                    'http://gravatar.com/avatar/ae4a6e7394d15692395136661c0c32b5?d=identicon',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 16 }}>김아무개12</Text>
                <Text style={{ color: 'gray' }}>@toss122@naver.com</Text>
              </View>
            </View>
            <Image
              source={{
                uri:
                  'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F2d%2Fae%2F83%2F2dae83958e6331e0b87296908fed4331--tree-trunks-fairies-garden.jpg&type=sc960_832',
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
              #미니어처 #DIY #숲속의집 #난이도높음 #미니조명 #인테리어
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HobbySharePage;
