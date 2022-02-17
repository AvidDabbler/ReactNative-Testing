import React from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';

import { mapSlice } from '../store';

export function Main() {
  const dispatch = useDispatch();
  const changeName = () => {
    dispatch(mapSlice.actions.setValue({ key: 'name', value: 'Maddie' }));
  };
  return (
    <View style={styles.container}>
      <Button title="Change the Name" onPress={changeName} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
