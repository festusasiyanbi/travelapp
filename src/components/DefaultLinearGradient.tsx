import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DefaultText from './DefaultText';

export default function DefaultLinearGradient({textContent, style}: any) {
  const gradientStyles = [
    styles.gradient,
    style && style.borderRadius && {borderRadius: style.borderRadius},
  ];
  return (
    <LinearGradient
      colors={['#68B8EB', '#3381B2']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={gradientStyles}>
      <View style={style}>
        <DefaultText>{textContent}</DefaultText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
  },
});
