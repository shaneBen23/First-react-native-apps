import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBE4qv-2AyUjN2regknMPCjuKeQcisP8qY',
      authDomain: 'auth-f30f2.firebaseapp.com',
      databaseURL: 'https://auth-f30f2.firebaseio.com',
      projectId: 'auth-f30f2',
      storageBucket: 'auth-f30f2.appspot.com',
      messagingSenderId: '7840134027'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
