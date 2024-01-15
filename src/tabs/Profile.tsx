import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultText from '../components/DefaultText';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultText>Profile page</DefaultText>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    height: '100%',
    backgroundColor: '#0A171F',
  },
});
