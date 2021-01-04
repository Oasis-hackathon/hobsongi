/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MyCarousel from './MyCarousel';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomePage = ({ user }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const a = ['십자수', '뜨게질', '목도리', '귀토시'];
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{ borderWidth: 1, flexDirection: 'row' }}>
          <View style={{ flex: 0.5, alignItems: 'center', borderWidth: 1 }}>
            <Text style={{ fontSize: 20 }}>
              {user && user._auth._user.displayName}님,
            </Text>
            <View style={{ marginBottom: 10 }} />
            <View
              style={{
                width: 80,
                height: 50,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 26 }}>십자수</Text>
            </View>
            <View style={{ marginBottom: 10 }} />
            <Text style={{ fontSize: 20 }}>이런 취미는 {'\n'} 어떠세요?</Text>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{ width: 40, height: 40, backgroundColor: 'black' }}
              // onPress={ }
            />
          </View>
        </View>

        <MyCarousel />
      </ScrollView>
    </>
  );
};

export default HomePage;
