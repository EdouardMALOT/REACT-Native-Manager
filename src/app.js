import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import Router from './router';

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
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
        </Provider>
      );
  }
}


export default App;
