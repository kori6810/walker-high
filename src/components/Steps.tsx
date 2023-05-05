import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const Steps = () => {
  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[[StyleSheet.absoluteFill], {backgroundColor: '#8BED4F', width:'50%'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Steps;
