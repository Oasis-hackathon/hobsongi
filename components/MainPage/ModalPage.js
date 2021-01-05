/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalPage = ({
  isModalVisible,
  setModalVisible,
  hobbyInfo,
  DrawerActions,
  navigation,
}) => {
  const jumpToAction = DrawerActions.jumpTo('WebViewOnlyLinkPage', {
    hobbyInfo,
  });
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={() => setModalVisible(!isModalVisible)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 250,
            height: 250,
            borderRadius: 10,
          }}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: 'gray',
            }}>
            <Text style={{ fontSize: 18 }}>{hobbyInfo && hobbyInfo.name}</Text>
          </View>
          <View style={{ flex: 1, padding: 20 }}>
            <Text>{hobbyInfo && hobbyInfo.description}</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.dispatch(jumpToAction)}>
              <Icon name="cart-minus" size={40} style={{ opacity: 0.5 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPage;
