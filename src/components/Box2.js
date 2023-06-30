import React, { useEffect, useRef } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Reanimated, {
  useAnimatedStyle, useSharedValue, withSpring, withTiming, Easing,
} from 'react-native-reanimated';

const { width: windowWidth } = Dimensions.get('window');

function Box(props) {
  const { isRight } = props;
  const left = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    left: withTiming(left.value, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }),
  }), []);

  useEffect(() => {
    if (isRight) {
      left.value = windowWidth - 100;
    } else {
      left.value = 0;
    }
  }, [isRight]);
  return (
    <Reanimated.View style={[styles.box, animatedStyle]} />
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
