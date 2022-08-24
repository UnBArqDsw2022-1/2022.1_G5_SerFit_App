import React from 'react';
import menuImage from './../../assets/menu-image.png';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const MainMenu = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
      alignItems: 'stretch',
			flexDirection: 'column',
			width: '100%',
    },
    topImage: {
      alignSelf: 'center',
      maxWidth: '100%',

    },
    buttonGroup: {
      display: 'flex',
      padding:0,
      border: 'none',
      flexDirection: 'column',
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
    },
    button: {
      marginBottom: 15,
      height: 45,
      flexBasis: 100
    }
  })

  return (
    <View style={styles.container}>
      <Image style={styles.topImage} source={menuImage} />
      <ScrollView style={styles.buttonGroup}>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
          <PrimaryButton
            text='Meu Perfil'
            onPress={event => {
              props.navigator.navigate('MeuPerfil')
            }}
            style={styles.button}
          ></PrimaryButton>
      </ScrollView>
    </View>
  )
}

export default MainMenu;