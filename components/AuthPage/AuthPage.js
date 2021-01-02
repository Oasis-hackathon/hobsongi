/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SplashPage from '../SplashPage';
// import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';

const AuthPage = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // if (!isLoading) {
  //   return <SplashPage />;
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 45 }}>홉송이</Text>
      <View style={{ marginBottom: 60 }} />
      <SwitchToggle
        buttonText={switchOn ? '로그인' : '회원가입'}
        // backTextRight={switchOn ? '' : '로그인'}
        // backTextLeft={switchOn ? '회원가입' : ''}
        type={1}
        buttonStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}
        // rightContainerStyle={{
        //   flex: 1,
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
        // leftContainerStyle={{
        //   flex: 1,
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        // }}
        buttonTextStyle={{ fontSize: 20 }}
        textRightStyle={{ fontSize: 20 }}
        textLeftStyle={{ fontSize: 20 }}
        containerStyle={{
          marginTop: 16,
          width: 160,
          height: 65,
          borderRadius: 30,
          padding: 5,
        }}
        backgroundColorOn="#fff"
        backgroundColorOff="#fff"
        circleStyle={{
          width: 80,
          height: 55,
          borderRadius: 27.5,
          backgroundColor: 'blue', // rgb(102,134,205),
        }}
        switchOn={switchOn}
        onPress={() => setSwitchOn(!switchOn)}
        circleColorOff="#e5e1e0"
        circleColorOn="#e5e1e0"
        duration={500}
      />
      {/* <Button title="click" onPress={() => navigation.navigate('HobbyList')} /> */}
    </View>
  );
};

export default AuthPage;
