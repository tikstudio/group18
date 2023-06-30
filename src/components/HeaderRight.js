import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HeaderRight(props) {
  return (
    <TouchableOpacity>
      <Text>menu</Text>
    </TouchableOpacity>
  );
}

export default HeaderRight;
