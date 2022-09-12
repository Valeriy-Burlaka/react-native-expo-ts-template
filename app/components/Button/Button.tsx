import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  backgroundColor?: string;
  onPress: () => void;
  text?: string;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  text: {
    color: 'black',
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
