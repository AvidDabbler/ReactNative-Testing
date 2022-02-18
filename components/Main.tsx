import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, StyleSheet, View } from 'react-native';

import { mapController } from '../controllers';

export function Main() {
  return (
    <View style={styles.container}>
      <Button title='Change Location' onPress={mapController.changeLocation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    marginTop: '8%',
    marginBottom: '19%',
    marginHorizontal: '10%',
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'center',
  },
});
