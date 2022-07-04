import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: 'auto',
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yo, Ser Fit está rodando Broooooooooo!</Text>
      <StatusBar style={styles.statusBar} />
    </View>
  );
}
