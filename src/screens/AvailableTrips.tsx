import {StyleSheet, View} from 'react-native';
import React from 'react';
import TabNavigator from '../stacks/TabNavigator';

const AvailableTrips = () => {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};
export default AvailableTrips;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
});
