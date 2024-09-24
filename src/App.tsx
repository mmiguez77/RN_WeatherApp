/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/bg2.jpg')}
        blurRadius={70}
        style={styles.bgImage}
      />
      <SafeAreaView style={styles.safeAreStyle}>
        <View>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: 15}}>
            Search
          </Text>
        </View>
        <View style={styles.infoViewStyle}>
          <View style={[styles.rowStyle, {marginBottom: 5}]}>
            <Text style={styles.cityText}>Montreal,</Text>
            <Text style={styles.countryText}> {'' + 'Canada'} </Text>
          </View>

          <View style={[styles.rowStyle, {width: '50%'}]}>
            <Text style={styles.restText}>amance</Text>
            <Text style={styles.restText}>luna</Text>
          </View>

          <Image
            source={require('./assets/images/sun.png')}
            style={styles.centerImage}
          />
          <View
            style={{
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={styles.temperatureText}>19º</Text>
            <Text style={[styles.restText, {fontSize: 20}]}>Mostly Cloudy</Text>
            <View style={styles.rowStyle}>
              <Text style={styles.restText}>High</Text>
              <Text style={styles.restText}>Low</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.restText}>Humedad</Text>
              <Text style={styles.restText}>viento</Text>
              <Text style={styles.restText}>tiemp</Text>
            </View>
          </View>
        </View>

        <View style={styles.flatListViewStyle}>
          <Text>Por hora</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({item}) => <Text>{item}</Text>}
            horizontal
          />
        </View>

        <View style={styles.flatListViewStyle}>
          <Text>Semanal</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({item}) => <Text>{item}</Text>}
            horizontal
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  safeAreStyle: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 10 : 0,
    paddingHorizontal: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
  infoViewStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListViewStyle: {
    flex: 0.8,
  },
  centerImage: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cityText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
  countryText: {
    fontSize: 20,
    color: 'white',
  },
  temperatureText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
  restText: {
    color: 'white',
  },
});
