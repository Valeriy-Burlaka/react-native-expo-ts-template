import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

import { type ButtonProps as BaseProps } from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 80,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 6,
  },
  text: {
    color: 'black',
    fontFamily: 'space-mono',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
});

export type Props = {
  backgroundColor: string;
  style?: ViewStyle;
}

export const BaseButton = ({ text, onPress, backgroundColor, style = {}}: BaseProps & Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        backgroundColor,
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
