import React from 'react';

export type ButtonProps = {
  onPress: () => void;
  text: string;
}

export const Button: React.ComponentType<ButtonProps>;
