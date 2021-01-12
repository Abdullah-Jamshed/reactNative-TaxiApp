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

// Dummy Data
import {data} from '../dummuData/data';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/session.json';

const CarIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

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
    <View style={styles.categoryWrapper}>
      {data.map((item) => {
        return (
          <View key={item.id} style={styles.category}>
            <Text>{item.name}</Text>
            <CarIcon name={item.icon} size={45} />
          </View>
        );
      })}
    </View>
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
      height: 10,
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
  categoryWrapper: {},
  category: {},
});

export default Home;
