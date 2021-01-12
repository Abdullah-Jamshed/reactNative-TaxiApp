import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Components
import Map from '../component/Map';

// Dummy Data
import {data} from '../dummuData/data';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/session.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const {width, height} = Dimensions.get('window');

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
            <Text style={{color: item.id === '1' ? '#5d5e6b' : '#c1c2c7'}}>
              {item.name}
            </Text>
            <CustomIcon
              style={{color: item.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
              name={item.icon}
              size={45}
            />
          </View>
        );
      })}
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>PickMe Here</Text>
      </TouchableOpacity>
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
  categoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    top: height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,

    elevation: 3,
  },
  category: {
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
