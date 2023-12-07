// index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AgoraRTC from 'react-native-agora';

const agoraAppId = 'c9d2e4f0138e4075acf0c878c19a86f3';
AgoraRTC.initialize(agoraAppId);

AppRegistry.registerComponent(appName, () => App);
