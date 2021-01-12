import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
