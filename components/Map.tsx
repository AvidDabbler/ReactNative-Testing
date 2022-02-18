import React , {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native'; // eslint-disable-line no-eval
import { Image, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { mapController } from '../controllers';

export const MarkerContainer = styled.View`
  max-width: 250px;
  display: flex;
  align-items: center;
`;

export function Map() {
  const busStops = useSelector((state) => state.map.busStops);
  const [region, setRegion] = useState<any>({
    latitude: 38.620836, 
    longitude: -90.229738,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(()=>{
    mapController.getStops();
  }, [])

  // useEffect(() => {
  //   if(busStops.length === 0) return;
  //   console.log(busStops[0].geometry.coordinates);
  // }, [busStops])

  const onRegionChange = (region: any) => {
    // console.log(region)
    setRegion(region);
  }

  const image = require('../assets/favicon.png')
	return (
    <MapView
    style={styles.container}
    onRegionChange={(region) => onRegionChange(region)}
    initialRegion={region}>
        {busStops.map((stop: any, i: number) => {
        return (<Marker
            key={i}
            coordinate={{
              latitude: stop.geometry.coordinates[1],
              longitude: stop.geometry.coordinates[0],
            }}>
              <Image
                source={image}
              />
          </Marker>)}
        )}
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});