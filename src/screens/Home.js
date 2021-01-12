import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import mapStyle from '../styles';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Home = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.absolute}
      initialRegion={{
        latitude: 24.8659854,
        longitude: 67.1735312,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * ASPECT_RATIO,
      }}
      customMapStyle={mapStyle}></MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

export default Home;
