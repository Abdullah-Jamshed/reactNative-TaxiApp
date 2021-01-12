import React from 'react';

import {View, StyleSheet} from 'react-native';

// Components
import Map from '../component/Map';

const Home = () => (
  <View style={styles.container}>
    <Map />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
