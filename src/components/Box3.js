import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { Dimensions, StyleSheet } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

function Box3(props) {
  const { isRight } = props;

  const box = useRef();
  useEffect(() => {
    if (isRight) {
      // box.current.fadeInLeft(5000);
      console.log(box.current);
    }
  }, [isRight]);
  return (
    <Animatable.View
      ref={box}
      style={styles.box}
      delay={1000}
      duration={500}
      animation={leftAnimation}
      iterationCount={Infinity}
    />
  );
}

const leftAnimation = {
  0: {
    left: 0,
  },
  1: {
    left: windowWidth - 100,
  },
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 10,
  },
});
export default Box3;
