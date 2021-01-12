import React, {useState} from 'react';

// React Native component
import {View, StyleSheet, Dimensions} from 'react-native';

// Libraries Components
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';

// Map style
import mapStyle from '../styles';

// Icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = () => {
  const [radius, setRadius] = useState(60);
  return (
    <MapView
      onRegionChange={({longitudeDelta, latitudeDelta}) => {
        // setRadius(Math.round(((longitudeDelta + latitudeDelta) ) * 3000));
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.absolute}
      initialRegion={{
        latitude: 24.8659854,
        longitude: 68.1799912,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * ASPECT_RATIO,
      }}
      customMapStyle={mapStyle}>
      <Circle
        key="test"
        center={{
          latitude: 24.8659854,
          longitude: 68.1799912,
        }}
        radius={radius}
        strokeWidth={1}
        strokeColor={'rgb(2,220,159)'}
        fillColor={'rgba(2,220,159,.25)'}
      />
      <Marker
        coordinate={{
          latitude: 24.8659854,
          longitude: 68.1799912,
        }}>
        <View style={styles.pin}>
          <Fontisto name="map-marker-alt" size={30} color="#02dcf9" />
        </View>
      </Marker>
      <Marker
        coordinate={{
          latitude: 24.862637,
          longitude: 68.179755,
        }}>
        <View style={styles.navigatorPin}>
          <Ionicons name="navigate" size={20} color="#fff" />
        </View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  navigatorPin: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});

export default Map;
