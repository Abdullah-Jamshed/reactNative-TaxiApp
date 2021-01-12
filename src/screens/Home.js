import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Components
import Map from '../component/Map';

// Icons
import Feather from 'react-native-vector-icons/Feather';

const Home = () => (
  <View style={styles.container}>
    <Map />

    <SafeAreaView style={styles.safeContainer}>
      <View>
        <Feather name="menu" size={24} />
      </View>
      <TouchableOpacity style={styles.search}>
        <View style={styles.inputWrapper}>
          <View style={styles.greenDot} />
          <View>
            <Text style={styles.inputText}>What your Location</Text>
          </View>
        </View>
        <View>
          <Feather name="heart" size={20} style={{color: '#8b8d96'}} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    marginHorizontal: 20,
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 3,
  },
  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: '#0ddda2',
    borderRadius: 100,
    marginRight: 10,
  },
  inputText: {
    fontWeight: '600',
    color: '#8b8d96',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
