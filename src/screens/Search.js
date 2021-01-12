import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

// Components

// Dummy Data
import {recentData, favData} from '../dummuData/data';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => (
  <View style={styles.container}>
    <ScrollView>
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
      <View style={styles.contentWrapper}>
        <Text style={styles.bigTitle}>Favorites Places</Text>
        <View style={{marginBottom: 20}}>
          {favData.map((data) => {
            return (
              <View key={data.id} style={styles.favoriteWrapper}>
                <View style={styles.favoriteIcon}>
                  <View style={{marginTop: 5}}>
                    <Fontisto
                      name="heart"
                      size={18}
                      color="#04dca0"
                      style={{marginRight: 10}}
                    />
                  </View>
                  <View>
                    <Text style={styles.favoriteTitle}>{data.title}</Text>
                    <Text style={styles.favoriteSubtitle}>{data.subtitle}</Text>
                  </View>
                </View>
                <View>
                  <Feather name="minus-circle" size={24} color="#ff909a" />
                </View>
              </View>
            );
          })}
        </View>
        <View>
          <Text style={styles.bigTitle}>Recent Visited Places</Text>
          <View>
            {recentData.map((data) => {
              return (
                <View key={data.id} style={styles.recentWrapper}>
                  <MaterialCommunityIcons
                    name="clock-time-five"
                    size={24}
                    style={{marginRight: 10, color: '#80828b'}}
                  />
                  <Text style={styles.recentText}>{data.title}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
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
  contentWrapper: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#404151',
    marginBottom: 20,
  },
  favoriteWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteIcon: {
    flexDirection: 'row',
  },
  favoriteTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555664',
    marginBottom: 5,
  },
  favoriteSubtitle: {
    color: '#a9abb0',
  },
  recentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recentText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#80828b',
  },
});

export default Search;
