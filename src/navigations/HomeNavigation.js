import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
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
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
