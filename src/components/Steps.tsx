import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

type stepsProps = {
  step: number;
};

const Steps = ({step}: stepsProps) => {
  return (
    <View style={{width: '100%'}}>
      <View style={[styles.progressBar]} />
      <View
        style={[
          styles.progressBar,
          {borderColor: 'black', zIndex: 3, width: `${step * 25}%`},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 5,
    position: 'absolute',
  },
});
export default Steps;
