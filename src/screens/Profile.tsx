import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Profile page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
});
