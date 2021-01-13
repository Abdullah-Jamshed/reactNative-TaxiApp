import React, {useState} from 'react';

// React Native component
import {View, StyleSheet, Dimensions} from 'react-native';

// Libraries Components
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Circle,
  MapViewDirections,
} from 'react-native-maps';

// Map style
import mapStyle from '../styles';

// Icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = ({screenName}) => {
  const [radius, setRadius] = useState(60);
  return (
    <MapView
      onRegionChange={({longitudeDelta, latitudeDelta}) => {
        // setRadius(Math.round(((longitudeDelta + latitudeDelta) ) * 3000));
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.absolute}
      initialRegion={{
        latitude: 24.885204,
        longitude: 67.169733,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * ASPECT_RATIO,
      }}
      customMapStyle={mapStyle}>
      <Circle
        key="test"
        center={{
          latitude: 24.885204,
          longitude: 67.169733,
        }}
        radius={radius}
        strokeWidth={1}
        strokeColor={'rgb(2,220,159)'}
        fillColor={'rgba(2,220,159,.25)'}
      />
      <Marker
        coordinate={{
          latitude: 24.885204,
          longitude: 67.169733,
        }}>
        <View style={styles.pin}>
          <Fontisto name="map-marker-alt" size={30} color="#02dcf9" />
        </View>
      </Marker>
      {/* <MapViewDirections
        origin={{
          latitude: -9.64561693,
          longitude: -35.73592044,
        }}
        destination={{
          latitude: -9.645601,
          longitude: -35.734108,
        }}
        apikey={'AIzaSyBVFhY3cURPTbAoOnkyAeijkAt2kqRJ2iY'}
        strokeWidth={3}
        strokeColor="#333"
      /> */}
      {screenName === 'Home' && (
        <Marker
          coordinate={{
            latitude: 24.862637,
            longitude: 68.179755,
          }}>
          <View style={styles.navigatorPin}>
            <Ionicons name="navigate" size={20} color="#fff" />
          </View>
        </Marker>
      )}
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
