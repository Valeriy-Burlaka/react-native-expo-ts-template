import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  backgroundColor?: string;
  onPress: () => void;
  text?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '160px',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 6,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
});

export const Button = ({ backgroundColor = 'violet', text = 'click me', onPress, }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor,
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
