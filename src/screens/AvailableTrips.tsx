import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import DefaultText from '../components/DefaultText';
import DefaultLinearGradient from '../components/DefaultLinearGradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import NearbyTrips from '../components/NearbyTrips';
import PopularTrips from '../components/PopularTrips';

const AvailableTrips = () => {
  return (
    <View>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.wrapper}>
            <View style={styles.locationView}>
              <DefaultText style={styles.currentTxt}>
                Current Location
              </DefaultText>
              <DefaultText style={styles.locationTxt}>
                <Icon6 name="location-dot" color="red" size={18} /> |
                Scarborough, ON
              </DefaultText>
            </View>
            <View style={styles.notificationView}>
              <DefaultText>
                <Icon name="bell-o" size={25} />
              </DefaultText>
              <View style={styles.notificationWrapper}>
                <DefaultText>.</DefaultText>
              </View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Search any locations"
              placeholderTextColor="#fff"
            />
            <View style={styles.filterWrapper}>
              <DefaultLinearGradient
                textContent={<Icon name="filter" size={25} />}
                style={styles.filterView}
              />
            </View>
          </View>
          <NearbyTrips />
          <PopularTrips />
        </SafeAreaView>
      </View>
      <View style={styles.footerView}>
        <View style={styles.iconView}>
          <Icon name="home" size={25} color="#fff" />
        </View>
        <Icon name="heart-o" size={25} color="#fff" />
        <Icon name="bars" size={25} color="#fff" />
        <Icon name="user-o" size={25} color="#fff" />
      </View>
    </View>
  );
};

export default AvailableTrips;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: '#0A171F',
    paddingHorizontal: 15,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  currentTxt: {
    fontWeight: '700',
    color: 'gray',
  },
  locationView: {
    rowGap: 7,
  },
  locationTxt: {
    fontWeight: '700',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationView: {
    height: 50,
    width: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222F37',
    position: 'relative',
  },
  notificationWrapper: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#4590C0',
    position: 'absolute',
    top: 10,
    right: 15,
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: '#222F37',
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: '700',
  },
  filterView: {
    height: 50,
    width: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterWrapper: {
    height: 50,
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    height: '10%',
    width: '100%',
  },
  iconView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#59A1CF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
