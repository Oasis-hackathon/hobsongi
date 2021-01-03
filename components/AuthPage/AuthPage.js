/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import SplashPage from '../SplashPage';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import auth from '@react-native-firebase/auth';

const AuthPage = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  if (initializing) return null;

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  // if (!isLoading) {
  //   return <SplashPage />;
  // }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e6ffff' }}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 90,
        }}>
        <Text style={{ fontSize: 45, marginBottom: 40 }}>홉송이</Text>

        <SwitchToggle
          buttonText={switchOn ? '회원가입' : '로그인'}
          backTextRight={switchOn ? '' : '회원가입'}
          backTextLeft={switchOn ? '로그인' : ''}
          type={1}
          buttonStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
          }}
          rightContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          leftContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          buttonTextStyle={{ fontSize: 20 }}
          textRightStyle={{ fontSize: 20 }}
          textLeftStyle={{ fontSize: 20 }}
          containerStyle={{
            marginTop: 16,
            width: 250,
            height: 50,
            borderRadius: 30,
            padding: 5,
          }}
          backgroundColorOn="#fff0e6"
          backgroundColorOff="#cce5ff"
          circleStyle={{
            width: 120,
            height: 40,
            borderRadius: 27.5,
            backgroundColor: 'blue', // rgb(102,134,205),
            elevation: 4,
          }}
          switchOn={switchOn}
          onPress={() => setSwitchOn(!switchOn)}
          circleColorOff="#e6ffe6"
          circleColorOn="#e5e1e0"
          duration={500}
        />

        <View style={{ marginBottom: 40 }} />

        {switchOn ? (
          <>
            <TextInput
              placeholder="이메일 혹은 닉네임"
              placeholderTextColor="gray"
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingLeft: 15,
                marginBottom: 20,
              }}
            />
            <TextInput
              placeholder="비밀번호"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingLeft: 15,
                marginBottom: 20,
              }}
            />
            <TextInput
              placeholder="비밀번호 확인"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingLeft: 15,
                marginBottom: 20,
              }}
            />
          </>
        ) : (
          <>
            <TextInput
              placeholder="이메일 혹은 닉네임"
              placeholderTextColor="gray"
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingLeft: 15,
                marginBottom: 20,
              }}
            />
            <TextInput
              placeholder="비밀번호"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingLeft: 15,
                marginBottom: 20,
              }}
            />
          </>
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#ffffe6',
            elevation: 5,
          }}
          onPress={() => navigation.navigate('MainDrawerNav')}>
          <Text style={{ fontSize: 24 }}>제출</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AuthPage;
