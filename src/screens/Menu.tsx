import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Menu = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Menu page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {},
});
