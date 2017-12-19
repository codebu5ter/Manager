import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';


export default class App extends React.Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyC7gA4iybV_E_B8_TFtiAKBt0pus3sdt-k",
    authDomain: "manager-7d2ac.firebaseapp.com",
    databaseURL: "https://manager-7d2ac.firebaseio.com",
    projectId: "manager-7d2ac",
    storageBucket: "manager-7d2ac.appspot.com",
    messagingSenderId: "908679459002"
  };
  firebase.initializeApp(config);

  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
