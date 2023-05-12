import Steps from '../../components/Steps';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useForm} from 'react-hook-form';

const deviceWidth = Dimensions.get('window').width;
const SignedUpScreen = ({navigation}: any) => {
  //useForm
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Steps step={4} />
        <Text style={styles.title}>반가워요! </Text>
        <Text style={[styles.title, {marginTop: 0, marginBottom: 25}]}>
          회원님
        </Text>
      </View>
      <View style={styles.background}></View>
      <Image
        style={styles.bgImage}
        source={require('../../assets/images/signedUpBg.png')}
      />
      <View style={{backgroundColor:'white', flex:1}}>
      <TouchableOpacity
        style={styles.btnBlack}
        onPress={handleSubmit(() => navigation.navigate('Home'))}>
        <Text style={{...styles.text, ...{color: '#fff'}}}>다음 </Text>
      </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer:{
    position:'absolute',
    top:25,
    left:0,
    width:deviceWidth,
    paddingHorizontal:20
  },
  title: {
    fontSize: 36,
    color: 'white',
    marginTop: 25,
    fontWeight:'bold'
  },
  btnBlack: {
    marginTop: 10,
    height: 55,
    borderRadius: 6,
    width: deviceWidth - 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  bgImage: {
    // position: 'absolute',
    width: '100%',
    height: '90%',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    zIndex: -2,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex:-1
  },
});
export default SignedUpScreen;
