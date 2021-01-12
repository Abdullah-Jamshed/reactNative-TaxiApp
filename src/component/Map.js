import React from 'react';

// React Native component
import {View, StyleSheet, Dimensions} from 'react-native';

// Libraries Components
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// Map style
import mapStyle from '../styles';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = () => (
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
);

const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

export default Map;
