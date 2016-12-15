import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducer';
import LoginForm from './components/loginForm';

class App extends React.Component {

   componentWillMount() {
    const config = {
        apiKey: 'AIzaSyDr7iKZt9vFy1nAE0zeIcA_1W3k5bM7P_I',
        authDomain: 'manager-6edc7.firebaseapp.com',
        databaseURL: 'https://manager-6edc7.firebaseio.com',
        storageBucket: 'manager-6edc7.appspot.com',
        messagingSenderId: '979297564404'
      };

    firebase.initializeApp(config);
  }

  render() {
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <LoginForm />
          </View>
        </Provider>
      );
  }
}


export default App;
