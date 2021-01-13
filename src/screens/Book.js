import React, {useState} from 'react';

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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/session.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const {width, height} = Dimensions.get('window');

const Book = () => {
  const [footer, setFooter] = useState(false);
  return (
    <View style={styles.container}>
      <Map screenName="Book" />
      <View>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.header}>
            <Feather name="menu" size={24} style={{marginTop: 20}} />
            <Feather name="x" size={24} style={{marginTop: 20}} />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity
          style={styles.actionButtonWrapper}
          activeOpacity={0.7}
          onPress={() => setFooter(!footer)}>
          <Ionicons name="grid" size={20} style={{color: '#fff'}} />
        </TouchableOpacity>
        {footer && (
          <View>
            <View style={styles.categoryWrapper}>
              {data.map((item) => {
                return (
                  <View key={item.id} style={{alignItems: 'center'}}>
                    <Text
                      style={{color: item.id === '1' ? '#5d5e6b' : '#c1c2c7'}}>
                      {item.name}
                    </Text>
                    <CustomIcon
                      name={item.icon}
                      size={40}
                      style={{color: item.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
                    />
                  </View>
                );
              })}
            </View>
            <View style={styles.footerDiscription}>
              <Text style={styles.footerTitle}>PKR 800-920</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: '#868891'}}>
                  Note:{' '}
                </Text>
                <View style={{width: (width * 80) / 100}}>
                  <Text style={{color: '#868891'}}>
                    This is an approximate estimate. Actual cost may be diffrent
                    due to traffic and wating time
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={[
                  styles.footerButton,
                  {borderRightWidth: 2, borderRightColor: '#f5f5f6'},
                ]}
                activeOpacity={1}>
                <Text style={styles.buttonText1}>Cash</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.footerButton,
                  {borderLeftWidth: 2, borderLeftColor: '#f5f5f6'},
                ]}
                activeOpacity={1}>
                <Text style={styles.buttonText2}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    width,
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  actionButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#8f9098',
    alignSelf: 'center',
    marginBottom: 20,
  },
  footerDiscription: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  footerTitle: {
    color: '#909199',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: '#e9e9eb',
    padding: 20,
    alignItems: 'center',
    width: width / 2,
  },
//   buttonText1: {},
//   buttonText2: {},
});

export default Book;
