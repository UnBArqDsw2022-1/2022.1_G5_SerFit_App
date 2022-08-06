import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import api from "./services/api";


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
  useEffect(() => {
    teste();
  }, []);
  const teste = async () => {
    try{
      const { data } = await api.get("/");
      console.log(data)
    }
    catch(error){
      console.log(error)

    }
  }
  return (
    <View style={styles.container}>
      <Text>Yo, Ser Fit está rodando Broooooooooo!</Text>
      <StatusBar style={styles.statusBar} />
    </View>
  );
}
