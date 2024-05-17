import Reactotron from 'reactotron-react-native';
const appName = require('./app.json').expo.name;

Reactotron.configure({
  name: appName,
}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
