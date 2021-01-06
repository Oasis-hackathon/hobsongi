/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

export const DrawerContent = (props) => {
  const onUserLogOut = () => {
    Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
      { text: '확인', onPress: handleSignOut },
      { text: '취소' },
    ]);
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('유저 로그아웃'));
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: props.user && props.user._auth._user.photoURL,
                }}
                size={50}
                style={{ marginTop: 5 }}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>
                  {props.user && props.user._auth._user.displayName}
                </Title>
                <Caption style={styles.caption}>
                  {props.user && props.user.email}
                </Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Caption style={styles.caption}>내가 관심있는 취미</Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {' '}
                  4개
                </Paragraph>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="홈"
              labelStyle={{ fontFamily: '야놀자 야체 Regular', fontSize: 18 }}
              onPress={() => {
                props.navigation.navigate('HomePage');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="취미목록"
              labelStyle={{ fontFamily: '야놀자 야체 Regular', fontSize: 18 }}
              onPress={() => {
                props.navigation.navigate('HobbyListPage');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="취미공유"
              labelStyle={{ fontFamily: '야놀자 야체 Regular', fontSize: 18 }}
              onPress={() => {
                props.navigation.navigate('HobbySharePage');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="로그아웃"
          labelStyle={{ fontFamily: '야놀자 야체 Regular', fontSize: 18 }}
          onPress={onUserLogOut}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    lineHeight: 14,
    fontFamily: '야놀자 야체 Regular',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    marginRight: 3,
    fontSize: 16,
    fontFamily: '야놀자 야체 Regular',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
