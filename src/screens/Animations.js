import React, { useCallback, useState } from 'react';
import { Button, View } from 'react-native';
import Box from '../components/Box';
import Box2 from '../components/Box2';
import Box3 from '../components/Box3';

function Animations() {
  const [isRight, setIsRight] = useState(false);
  const handlePress = useCallback(() => {
    setIsRight(!isRight);
  }, [isRight]);
  return (
    <View>
      <Box isRight={isRight} />
      <Box2 isRight={isRight} />
      <Box3 isRight={isRight} />
      <Button onPress={handlePress} title="test" />
    </View>
  );
}

export default Animations;
