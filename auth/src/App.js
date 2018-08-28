import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBE4qv-2AyUjN2regknMPCjuKeQcisP8qY',
      authDomain: 'auth-f30f2.firebaseapp.com',
      databaseURL: 'https://auth-f30f2.firebaseio.com',
      projectId: 'auth-f30f2',
      storageBucket: 'auth-f30f2.appspot.com',
      messagingSenderId: '7840134027'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      );

      case false:
        return <LoginForm />;

      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
