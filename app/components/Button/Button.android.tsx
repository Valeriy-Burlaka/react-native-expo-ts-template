import React from 'react';
import { Platform } from 'react-native';

import { type ButtonProps as Props } from './Button';

import { BaseButton } from './Button.default';

export const Button = ({ text, onPress }: Props) => {
  return (
    <BaseButton
      backgroundColor="orange"
      onPress={onPress}
      text={text + ` (${Platform.OS})`}
      style={{
        borderRadius: 4,
      }}
    />
  );
};
