import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View } from 'react-native';

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
      <Text>Open up App.js to start working on your bitch!</Text>
      <StatusBar style={styles.statusBar} />
    </View>
  );
}
