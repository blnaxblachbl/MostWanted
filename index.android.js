import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Stack from './routes';
import store from './stores';
import { Provider } from 'mobx-react';

export default class MostWanted extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Provider {...store}>
        <Stack />
      </Provider>
=======
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
>>>>>>> a15b569faf77ff99caeaeb89d3eb56a3919198c4
    );
  }
}

AppRegistry.registerComponent('MostWanted', () => MostWanted);
