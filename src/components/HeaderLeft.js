import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HeaderLeft(props) {
  if (!props.canGoBack) {
    return null;
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
}

export default HeaderLeft;
