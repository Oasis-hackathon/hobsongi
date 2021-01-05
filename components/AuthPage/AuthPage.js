/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import SplashPage from '../SplashPage';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import auth from '@react-native-firebase/auth';
import md5 from 'md5';
import database from '@react-native-firebase/database';

const AuthPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onLoginUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('로그인 완료!');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('에러', '등록되지 않은 이메일입니다', [
            { text: '확인', onPress: console.log('로그인 오류') },
          ]);
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('에러', '비밀번호가 틀렸습니다.', [
            { text: '확인', onPress: console.log('로그인 오류') },
          ]);
        }
        // console.error(error);
      });
  };

  const onCreateUser = async () => {
    if (password !== confirmPassword) {
      Alert.alert('에러', '비밀번호가 일치하지 않습니다. 다시 입력해주세요', [
        { text: '확인' },
      ]);
      return;
    }
    try {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (userCredentials.user) {
        await userCredentials.user.updateProfile({
          displayName: nickName,
          photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
        });
        console.log(userCredentials.user);
        await userCredentials.user.reload();
      }
      database().ref('users').child(userCredentials.user.uid).set({
        name: userCredentials.user._auth._user.displayName,
        image: userCredentials.user._auth._user.photoURL,
      });
      //////////////// realtime database에 넣기
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('에러', '이미 존재하는 이메일입니다.', [
          { text: '확인', onPress: console.log('회원가입 오류') },
        ]);
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert('에러', '올바르지 않은 이메일입니다.', [
          { text: '확인', onPress: console.log('회원가입 오류') },
        ]);
      }
      if (error.code === 'auth/weak-password') {
        Alert.alert('에러', '비밀번호는 6자리 이상이여야 합니다.', [
          { text: '확인', onPress: console.log('회원가입 오류') },
        ]);
      }
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
              placeholder="이메일"
              placeholderTextColor="gray"
              onChangeText={(text) => setEmail(text)}
              value={email}
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
              placeholder="닉네임"
              placeholderTextColor="gray"
              onChangeText={(text) => setNickName(text)}
              value={nickName}
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
              onChangeText={(text) => setPassword(text)}
              value={password}
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
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
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
              placeholder="이메일"
              placeholderTextColor="gray"
              onChangeText={(text) => setEmail(text)}
              value={email}
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
              onChangeText={(text) => setPassword(text)}
              value={password}
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
          onPress={switchOn ? onCreateUser : onLoginUser}>
          <Text style={{ fontSize: 24 }}>{switchOn ? '제출' : '로그인'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AuthPage;
