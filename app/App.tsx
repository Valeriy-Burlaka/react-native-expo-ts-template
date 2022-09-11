import { registerRootComponent } from 'expo';

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button } from 'components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  const [numClicked, setNumClicked] = useState(0);

  const incrementNumClicked = () => {
    setNumClicked(numClickedPrev => numClickedPrev + 1);
  };

  return (
    <View style={styles.container}>
      <Text>I was clicked {numClicked} times!</Text>
      <Button onPress={incrementNumClicked} />
      <StatusBar style="auto" />
    </View>
  );
}

export default registerRootComponent(App);
