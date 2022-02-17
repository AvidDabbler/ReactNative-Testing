import { Provider } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native'
import { Main } from './components';

import { store } from './store';
import { mapSlice } from './store/map';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
              <Text>hey</Text>

      </View>
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