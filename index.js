/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';


if(1){
  console.log('hello');
}

AppRegistry.registerComponent(appName, () => App);
