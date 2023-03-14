import React from 'react';
import { Platform } from 'react-native';

import { type ButtonProps as Props } from './Button';

import { BaseButton } from './Button.default';

export const Button = ({ text, onPress }: Props) => {
  return (
    <BaseButton
      backgroundColor="slateblue"
      onPress={onPress}
      text={text + ` (${Platform.OS})`}
      style={{
        borderRadius: 16,
        shadowColor: 'dodgerblue',
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        marginTop: 12,
      }}
    />
  );
};
