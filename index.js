/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

if (4) {
  console.log('hello');
  console.log('barev');
}

AppRegistry.registerComponent(appName, () => App);
