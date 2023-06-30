import React, { useEffect, useRef } from 'react';
import {
  View, Animated, StyleSheet, Dimensions,
} from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

function Box(props) {
  const { isRight } = props;
  const left = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isRight) {
      Animated.timing(left, {
        toValue: windowWidth - 100,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {

      });
    } else {
      Animated.timing(left, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {

      });
    }
  }, [isRight]);
  return (
    <Animated.View
      style={[styles.box, { transform: [{ translateX: left }] }]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 10,
  },
});

export default Box;
