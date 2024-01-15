import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultText from '../components/DefaultText';

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DefaultText>Menu page</DefaultText>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    height: '100%',
    backgroundColor: '#0A171F',
  },
});
