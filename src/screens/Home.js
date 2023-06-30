import React from 'react';
import {
  View, Text, Button, StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.3)" />
      <Text>Home</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Settings Wifi" onPress={() => navigation.navigate('Settings', { type: 'wifi' })} />
      <Button
        title="Maps"
        onPress={async () => {
          await navigation.navigate('AccountNavigation');
          navigation.navigate('AccountNavigation', { screen: 'Maps', params: {} });
        }}
      />
    </View>
  );
}

export default Home;
