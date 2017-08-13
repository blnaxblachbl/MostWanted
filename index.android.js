import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Stack from './routes';
import store from './stores';
import { Provider } from 'mobx-react';

export default class MostWanted extends Component {
  render() {
    return (
      <Provider {...store}>
        <Stack />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MostWanted', () => MostWanted);
