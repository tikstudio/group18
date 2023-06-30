import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import SettingsWifi from '../screens/SettingsWifi';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

const Stack = createStackNavigator();
const screenOptions = {
  headerTitleAlign: 'center',
  headerLeft: (p) => <HeaderLeft {...p} />,
  headerRight: (p) => <HeaderRight {...p} />,
};

function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SettingsWifi" component={SettingsWifi} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
