import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {
  useIsFocused, useNavigation, useRoute,
} from '@react-navigation/native';

function Settings() {
  const { params = {} } = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  // useFocusEffect(useCallback(() => {
  //   alert(1)
  // }, []))
  useEffect(() => {
    if (isFocused) {
      alert(2);
    } else {
      alert(3);
    }
  }, [isFocused]);
  return (
    <View>
      <Text>Settings</Text>
      <Text>{`Type: ${params.type}`}</Text>
      <Button title="wifi" onPress={() => navigation.navigate('SettingsWifi')} />
    </View>
  );
}

export default Settings;
