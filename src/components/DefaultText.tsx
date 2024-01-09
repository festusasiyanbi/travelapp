import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

type TextProps = {
  children: React.ReactNode;
  style?: TextStyle;
};

const DefaultText = ({children, style, ...props}: TextProps): JSX.Element => {
  return (
    <Text style={[styles.defaultTextStyle, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: 'white',
  },
});

export default DefaultText;
