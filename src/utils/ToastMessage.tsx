import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export const toastConfig = {
  success: ({ text1, text2, props }: any) => (
    <View style={[styles.container, { backgroundColor: '#00695f' }]}>
      <View style={styles.item}>
        <FontAwesomeIcon style={styles.ico} icon={faCircleCheck} color="white" size={18} />
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  ),
  error: ({ text1, text2, props }: any) => (
    <View style={[styles.container, { backgroundColor: '#aa2e25' }]}>
      <View style={styles.item}>
        <FontAwesomeIcon style={styles.ico} icon={faCircleExclamation} color="white" size={18} />
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  ),
  info: ({ text1, text2, props }: any) => (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
      <View style={styles.item}>
        <FontAwesomeIcon style={styles.ico} icon={faCircleExclamation} color="white" size={18} />
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  ),
};

const ToastMessage = (
  type: 'success' | 'error' | 'info',
  message: string,
  duration?: number,
  position?: 'top' | 'bottom',
) => {
  return Toast.show({
    type: type,
    text1: message,
    position: position,
    visibilityTime: duration || 2500,
  });
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '94%',
    opacity: 0.8,
    borderRadius: 8,
    display: 'flex',
  },
  item: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  ico: {
    marginTop: 2,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    letterSpacing: -0.42,
    color: 'white',
  },
});

export default ToastMessage;
