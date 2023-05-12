import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const WelcomeScreen = ({navigation, route}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <Image
        style={styles.bgImage}
        source={require('../assets/images/welcomebg.png')}
      />
      <Image
        style={styles.logoTxt}
        source={require('../assets/images/logoTxt.png')}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.signinBtn} onPress={()=>navigation.navigate('Signup')}>
          <Text style={{fontSize:13, color:'white', fontWeight:'700'}}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Login')}>
          <Text style={{fontSize:13, color:'black', fontWeight:'700'}}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  bgImage: {
    //  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    width: '100%',
    height: '100%',
  },
  logoTxt: {
    position: 'absolute',
    top: deviceHeight / 2.5,
    left: 90,
    zIndex: 3,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  btnContainer: {
    position: 'absolute',
    zIndex:3,
    flexDirection:'row',
    bottom:32,
    left:15,
    right:15

  },
  signinBtn: {
    backgroundColor:'black',
    width:167,
    height:52, 
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtn: {
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    width:167,
    height:52, 
    borderRadius:6,
    borderWidth:3,
    borderColor:'black',
    marginLeft:'auto',
    justifyContent:'center',
    alignItems:'center'
  },
  
});
export default WelcomeScreen;
