import React from 'react';
import { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import logo from '../assets/icon.png'
import LoginInput from '../../components/inputs/LoginInput';

import AuthContext from '../../contexts/AuthContext';

 
export default function CadastroPersonal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const accountType = "personal";
  const mainInterest = "academia";

  const { createAccount } = useContext(AuthContext);

	const handleCreateAccount = () =>  {
		createAccount(name, email, password, accountType, mainInterest);
	}
    return(
        <>
          <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior = "padding"style={styles.container}>

            <Image style ={styles.image} source={logo} />
            <View style={styles.form}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu nome" 
                autoCapitalize='words'
                onChangeText={text => setName(text)}  
              />
              <Text style={styles.label}>E-mail:</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu e-mail" 
                keyboardType='email-adress'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text => setEmail(text)}  
              />
              <Text style={styles.label}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Sua senha" 
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
  
              />
              <Text style={styles.label}>Confirmar senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha" 
                secureTextEntry={true}  
              />
              <TouchableOpacity 
                style={styles.button}
                onPress={handleCreateAccount}  
              >
                <Text style={styles.buttonText}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
          
          </KeyboardAvoidingView>
      </>
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
      borderBottomWidth: 4,
      color: '#555',
      
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
      marginTop: 15,
    },
  
    input: {
      borderWidth: 2,
      borderColor: '#FA6900',
      paddingHorizontal: 20,
      fontSize: 13,
      color: '#444',
      height: 44,
      marginBottom: 8,
      borderRadius: 8,
      
    
    },
  
    button: {
      backgroundColor: '#FA6900',
      justifyContent: 'center',
      alignItems: 'center',
      height: 35,
      marginTop: 40,
      borderRadius: 5,
      
    },
  
    buttonText: {
      fontSize: 14,
      color: 'white',
    },
  });


