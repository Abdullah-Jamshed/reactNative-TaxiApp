import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

// Components
import Map from '../component/Map';

// Dummy Data
import {data} from '../dummuData/data';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/session.json';

const {width, height} = Dimensions.get('window');

const Search = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.card}>
        <View style={styles.drop}>
          <Text style={styles.dropText}>Drop Location</Text>
          <TouchableOpacity>
            <Feather name="x" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <View style={styles.inputWrapper}>
            <View style={styles.pinkDot} />
            <TextInput
              placeholder="Where are you going"
              placeholderTextColor="#afb1b6"
            />
          </View>
          <View>
            <Feather name="heart" size={20} />
          </View>
        </View>

        <View style={styles.buttonCard}>
          <View style={styles.buttonCardPin}>
            <Fontisto
              name="map-marker-alt"
              size={20}
              style={styles.buttonCardIcon}
            />
            <Text style={styles.buttonCardText}>
              Tap to select from the map
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonCircle}>
            <Feather name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    marginHorizontal: 15,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },
  drop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropText: {
    fontWeight: 'bold',
    color: '#ff5563',
  },
  search: {
    marginVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#efeff8',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinkDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#ff4850',
    marginRight: 10,
  },
  buttonCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonCardPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCardIcon: {
    marginRight: 10,
    color: '#ff4858',
  },
  buttonCardText: {
    color: '#92939b',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Search;
