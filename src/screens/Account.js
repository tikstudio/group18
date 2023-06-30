import React from 'react';
import {
  View, Text, Button, StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Account(props) {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.3)" />
      <Text>Account</Text>
      <Button title="Animations" onPress={() => navigation.navigate('Animations')} />
      <Button title="Maps" onPress={() => navigation.navigate('Maps')} />
    </View>
  );
}

export default Account;
