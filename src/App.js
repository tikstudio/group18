import React, { useCallback, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import asyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigation from './navigations/HomeNavigation';
import SettingsNavigation from './navigations/SettingsNavigation';
import AccountNavigation from './navigations/AccountNavigation';
import LogOutNavigation from './navigations/LogOutNavigation';
import storage, { useStorage } from './helpers/Storage';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
};

function App() {
  // const token = "1";
  const token = useStorage('token', []);
  useEffect(() => {
    test();
  }, []);
  const test = useCallback(async () => {
    storage.setInt('number', 1);
    // const a = storage.getInt("number");
    await asyncStorage.setItem('token', 'hello');
    // const token = await asyncStorage.getItem("token");
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName="HomeNavigation">
          <Tab.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{
              title: 'Home',
              tabBarIcon: (props) => <Icon color={props.color} name="home" size={props.size} />,
            }}
          />
          <Tab.Screen
            name="SettingsNavigation"
            component={SettingsNavigation}
            options={{
              title: 'Settings',
              tabBarIcon: (props) => <Icon color={props.color} name="cog" size={props.size} />,
            }}
          />
          <Tab.Screen
            name="AccountNavigation"
            component={AccountNavigation}
            options={{
              title: 'Account',
              tabBarIcon: (props) => <Icon color={props.color} name="account" size={props.size} />,
            }}
          />
        </Tab.Navigator>
      ) : (
        <LogOutNavigation />
      )}
    </NavigationContainer>
  );
}

export default App;
