import React, {useState} from 'react';

// React Native component
import {View, StyleSheet, Dimensions} from 'react-native';

// Libraries Components
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

// Map style
import mapStyle from '../styles';

// env Variable
import {REACT_APP_API_KEY} from '@env'; // get your api key from google map platform

// Icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = ({screenName}) => {
  return (
    <>
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
        {screenName === 'Home' && (
          <>
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
            <Marker
              coordinate={{
                latitude: 24.862637,
                longitude: 68.179755,
              }}>
              <View style={styles.navigatorPin}>
                <Ionicons name="navigate" size={20} color="#fff" />
              </View>
            </Marker>
          </>
        )}
        {screenName === 'Book' && (
          <>
            <Circle
              key="test"
              center={{
                latitude: 24.885204,
                longitude: 67.169733,
              }}
              radius={10}
              strokeWidth={1}
              strokeColor={'rgb(2,220,159)'}
              fillColor={'rgba(2,220,159,.25)'}
            />
            <Marker
              coordinate={{
                latitude: 24.885204,
                longitude: 67.169733,
              }}>
              <View
                style={[styles.navigationDot, {backgroundColor: '#02dcf9'}]}
              />
            </Marker>
            <Circle
              key={(24.886252 + 67.175808).toString()}
              center={{
                latitude: 24.886192,
                longitude: 67.175808,
              }}
              radius={60}
              strokeWidth={1}
              strokeColor={'rgb(247, 70, 86)'}
              fillColor={'rgba(247, 70, 86,.25)'}
            />
            <Marker
              coordinate={{
                latitude: 24.886192,
                longitude: 67.175808,
              }}>
              <View
                style={[styles.navigationDot, {backgroundColor: '#f74656'}]}
              />
            </Marker>
          </>
        )}
        <MapViewDirections
          mode="WALKING"
          apiKey={REACT_APP_API_KEY}
          origin={{
            latitude: 24.885204,
            longitude: 67.169733,
          }}
          destination={{
            latitude: 24.886192,
            longitude: 67.175808,
          }}
          strokeWidth={3}
          strokeColor="#000"
          fillColor="#000"
        />
      </MapView>
    </>
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
  navigationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export default Map;
