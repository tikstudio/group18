import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animations from '../screens/Animations';
import Maps from '../screens/Maps';
import Account from '../screens/Account';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: 'center',
  headerLeft: (p) => <HeaderLeft {...p} />,
  headerRight: (p) => <HeaderRight {...p} />,
};
function AccountNavigation(props) {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Animations" component={Animations} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
