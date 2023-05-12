import Steps from '../../components/Steps';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {Input} from '../../components/CustomInput';

const SetPasswordScreen = ({navigation}: any) => {
  //useForm
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <SafeAreaView style={styles.container}>
      <Steps step={3} />
      <Text style={styles.title}>로그인에 사용할 </Text>
      <Text style={[styles.title, {marginTop: 0, marginBottom: 25}]}>
        비밀번호를 입력해주세요
      </Text>

      <Input
        placeholder="비밀번호를 (이메일) 입력"
        name="password"
        control={control}
        rules={{
          required: '비밀번호를 입력해주세요',
        }}
      />
      <Input
        placeholder="비밀번호를 (이메일) 입력"
        name="passwordConfirm"
        control={control}
        rules={{
          required: '비밀번호를 입력해주세요',
        }}
      />
      <TouchableOpacity
        style={styles.btnBlack}
        onPress={handleSubmit(() => navigation.navigate('SignedUpScreen'))}>
        <Text style={{...styles.text, ...{color: '#fff'}}}>다음 </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 25,
    color: 'black',
    marginTop: 25,
  },
  btnBlack: {
    marginTop: 20,
    height: 55,
    borderRadius: 6,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
});
export default SetPasswordScreen;
