import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Main from "./src/components/Main"

import rootReducer from "./src/reducers/reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
