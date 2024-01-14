import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Favorite = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Favorite page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {},
});
