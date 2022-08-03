import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import logo from '../assets/icon.png'

export default function cadastroUsuario() {
  return (
    <><View style={styles.top}>
      <Text style={styles.texto}>Criar Conta Cliente</Text>
    </View>
    <View style={styles.container}>
      
        <Image style ={styles.image} source={logo} />
        <View style={styles.form}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome" 
            autoCapitalize='words'/>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail" 
            keyboardType='email-adress'
            autoCapitalize='none'
            autoCorrect={false}/>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua senha" />
          <Text style={styles.label}>Confirmar senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View></>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 231,
    height: 183,
    resizeMode: 'stretch'
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    borderBottomWidth: 3,
    color: '#444'
    
  },

  texto: {
    fontWeight: 'normal',
    fontSize: 25,
    color: '#FA6900',
    fontWeight: 'bold',
    paddingTop: 52,
    paddingBottom: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  label:{
    marginBottom: 8,
    fontSize:15,
    color: '#FA6900'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },

  input: {
    borderWidth: 2,
    borderColor: '#FA6900',
    paddingHorizontal: 20,
    fontSize: 13,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 8,
  
  },

  button: {
    backgroundColor: '#FA6900',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttonText: {
    fontSize: 14,
    color: 'white',
  },
});
