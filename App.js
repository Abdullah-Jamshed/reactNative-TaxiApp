import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Book from './src/screens/Book';

import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
      {/* <Search /> */}
      {/* <Book /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

export default App;
