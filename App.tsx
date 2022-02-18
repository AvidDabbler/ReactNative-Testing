import React from 'react';

import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native'
import { Main, Map } from './components';

import { store } from './store';

export default function App() {

  return (
    <Provider store={store}>
      <Map />
      <Main />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});