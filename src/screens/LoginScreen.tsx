import {LoginInput} from '../components/CustomInput';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  BackHandler,
  ScrollView,
  Image,
} from 'react-native';
import {useForm} from 'react-hook-form';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
// import KakaoSvg from '../assets/svg/kakao.svg';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch } from 'react-redux';

import {useFocusEffect} from '@react-navigation/native';
// import { member } from '@src/redux/actions/MemberAction';
import ToastMessage from '@utils/ToastMessage';

const LoginScreen = ({route, navigation}: any) => {
  //   const dispatch = useDispatch();

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       // reset store && route
  //       dispatch({ type: 'SIGNUP_RESET' });

  //       const onBackPress = () => {
  //         navigation.navigate('Welcome');
  //         return true;
  //       };
  //       const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //       return () => backHandler.remove();
  //     }, [navigation]),
  //   );

  //useState
  //   const [memberType, setMemberType] = useState('individual');

  //useForm
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  //Fucntions

  /**
   * Sign in Implementation
   * @param data - values from input
   */

  const onSigninPressed = async (data: any) => {
    navigation.goBack();
  };

  /**
   * Sign in with kakaoTalk ot Naver
   * @param platform  - choosing platform to sign in with
   */

//   const onClickOauth = (platform: 'kakao' | 'naver') => {
//     navigation.navigate('Oauth', {platform});
//   };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.pageSignin}>
          <TouchableOpacity
            style={styles.goback}
            onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon icon={faXmark} size={28} />
          </TouchableOpacity>

          <View style={{marginTop: 60}}>
            <Text style={{fontSize:25,color:'black', letterSpacing:1.5, fontWeight:'500', marginBottom:35}}>
                Log in
            </Text>

            <LoginInput
              placeholder="아이디를 입력해주세요"
              name="username"
              control={control}
              rules={{
                required: '아이디를 입력해주세요',
              }}
            />
            <View style={{marginVertical:8}}/>
            <LoginInput
              placeholder="비밀번호를 입력해 주세요"
              secureTextEntry
              name="password"
              control={control}
              rules={{
                required: '비밀번호를 입력해 주세요',
              }}
            />
            <TouchableOpacity
              style={styles.btnBlack}
              onPress={handleSubmit(onSigninPressed)}>
              <Text style={{...styles.loginText, ...{color: '#fff'}}}>
              로그인하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgKakao} onPress={() => console.log('pressed kakao login')}>
              <Image source={require('../assets/images/kakao_login.png')}/>
              {/* <KakaoSvg width={18} height={18} style={{ marginRight: 8 }} /> */}
              {/* <Text style={{ ...styles.loginText, ...{ color: '#333' } }}>카카오로 시작하기</Text> */}
              </TouchableOpacity>
           
          </View>
        </View>
          <View style={styles.loginEtc}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Signup')
              }>
              <Text
                style={[styles.loginEtcText, {fontFamily: 'Pretendard-Bold'}]}>
                회원가입
              </Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => navigation.navigate('FindId')}>
              <Text style={[styles.loginEtcText]}>아이디 찾기</Text>
            </TouchableOpacity>

            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => navigation.navigate('FindPassword')}>
              <Text style={[styles.loginEtcText]}>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageSignin: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: '#ffffff',
  },
  img: {},
  imgContainer: {
    height: 280,
  },
  tabsType: {
    width: '100%',
    flexDirection: 'row',
    fontWeight: '700',
    lineHeight: 1.18,
    gap: 10,
    marginBottom: 10,
  },
  tab: {
    width: '48%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 12,
  },
  inputIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 30,
    right: 10,
  },
  text: {
    color: '#777',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.42,
    lineHeight: 16.52,
  },
  input: {},
  goback: {
    position: 'absolute',
    right: 0,
  },

  btnBlack: {
    marginTop: 20,
    height: 55,
    borderRadius: 6,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgKakao: {
    marginTop: 10,
    height: 55,
    borderRadius: 4,
    width: '100%',
    backgroundColor: '#FEE500',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row',
  },

  loginText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',

  },

  loginEtc: {
    height:64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 260,
    borderTopColor:"#eeeeee",
    borderBottomColor:'#eeeeee',
    borderWidth:2,
    borderLeftColor:'#ffffff',
    borderRightColor:'#ffffff'
  },
  loginEtcText: {
    textAlign: 'center',
    fontFamily: 'Pretendard-Medium',
    fontSize: 14,
    color: '#333',
    letterSpacing: -0.42,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#bbb',
    marginHorizontal: 19,
    height: 25,
  },
});

export default LoginScreen;
