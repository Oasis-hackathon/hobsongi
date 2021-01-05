/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import ModalPage from './ModalPage';
import { DrawerActions } from '@react-navigation/native';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HobbyListPage = ({ hobby, navigation }) => {
  const HobbyListHeight = Dimensions.get('window').height * 1.5;
  const [refreshing, setRefreshing] = useState(false);
  const [randomNumberArray, setRandomNumberArray] = useState([]);
  const [randomNumberFromOneToTen, setRandomNumberFromOneToTen] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [hobbyInfo, setHobbyInfo] = useState([]);

  for (let i = 0; i < hobby.length; i++) {
    randomNumberArray.push(i);
    if (i < 10) {
      randomNumberFromOneToTen.push(i);
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(100).then(() => {
      setRefreshing(false);
      setRandomNumberArray(shuffleArray(randomNumberArray));
      setRandomNumberFromOneToTen(shuffleArray(randomNumberFromOneToTen));
    });
  }, [
    setRandomNumberArray,
    setRandomNumberFromOneToTen,
    randomNumberArray,
    randomNumberFromOneToTen,
  ]);

  useEffect(() => {
    setRandomNumberArray(shuffleArray(randomNumberArray));
    setRandomNumberFromOneToTen(shuffleArray(randomNumberFromOneToTen));
  }, []);

  useEffect(() => {
    setRandomNumberArray(shuffleArray(randomNumberArray));
    setRandomNumberFromOneToTen(shuffleArray(randomNumberFromOneToTen));
  }, [randomNumberArray, randomNumberFromOneToTen]);

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D0E8F2',
        }}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>당신을 위한 추천</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          opacity: 0.3,
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View
          style={{
            height: HobbyListHeight,
            flexDirection: 'row',
          }}>
          <View style={{ flex: 0.47, flexDirection: 'column' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[0]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.3, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[0]].image[
                      randomNumberFromOneToTen[0]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[1]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.2, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[1]].image[
                      randomNumberFromOneToTen[1]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[2]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.3, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[2]].image[
                      randomNumberFromOneToTen[2]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[3]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.4, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[3]].image[
                      randomNumberFromOneToTen[3]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.53 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[4]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.35, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[4]].image[
                      randomNumberFromOneToTen[4]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[5]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.25, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[5]].image[
                      randomNumberFromOneToTen[5]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[6]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.2, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[6]].image[
                      randomNumberFromOneToTen[6]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setHobbyInfo(hobby[randomNumberArray[7]]);
                setModalVisible(!isModalVisible);
              }}
              style={{ flex: 0.2, borderWidth: 0.5, borderColor: '#f0f0f0' }}>
              <Image
                source={{
                  uri:
                    hobby &&
                    hobby[randomNumberArray[7]].image[
                      randomNumberFromOneToTen[7]
                    ],
                }}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ModalPage
        setModalVisible={setModalVisible}
        isModalVisible={isModalVisible}
        hobbyInfo={hobbyInfo}
        DrawerActions={DrawerActions}
        navigation={navigation}
      />
    </>
  );
};

export default HobbyListPage;
