/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HobbyListPage = ({ hobby }) => {
  const HobbyListHeight = Dimensions.get('window').height * 1.5;
  const [refreshing, setRefreshing] = useState(false);
  const [randomNumberArray, setRandomNumberArray] = useState([]);
  const [randomNumberFromOneToTen, setRandomNumberFromOneToTen] = useState([]);

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
  }, []);

  useEffect(() => {
    setRandomNumberArray(shuffleArray(randomNumberArray));
    setRandomNumberFromOneToTen(shuffleArray(randomNumberFromOneToTen));
  }, []);

  // useEffect(() => {
  //   setRandomNumberArray(shuffleArray(randomNumberArray));
  //   setRandomNumberFromOneToTen(shuffleArray(randomNumberFromOneToTen));
  // }, [randomNumberArray, randomNumberFromOneToTen]);

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
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[0]].image[
                    randomNumberFromOneToTen[0]
                  ],
              }}
              style={{ flex: 0.3, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[1]].image[
                    randomNumberFromOneToTen[1]
                  ],
              }}
              style={{ flex: 0.25, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[2]].image[
                    randomNumberFromOneToTen[2]
                  ],
              }}
              style={{ flex: 0.3, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
            <View style={{ flex: 0.4 }}>
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
            </View>
          </View>
          <View style={{ flex: 0.53 }}>
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[4]].image[
                    randomNumberFromOneToTen[4]
                  ],
              }}
              style={{ flex: 0.4, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[5]].image[
                    randomNumberFromOneToTen[5]
                  ],
              }}
              style={{ flex: 0.2, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
            <Image
              source={{
                uri:
                  hobby &&
                  hobby[randomNumberArray[6]].image[
                    randomNumberFromOneToTen[6]
                  ],
              }}
              style={{ flex: 0.4, borderWidth: 0.5, borderColor: '#f0f0f0' }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HobbyListPage;
