import React from 'react';
import menuImage from './../../assets/menu-image.png';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const MainMenu = props => {
  const screenTargets = {
    meuPerfil: {name: 'Meu Perfil', pathName:''},
    atividades: {name: 'Atividades da Academia', pathName: ''},
    exercicios: {name: 'Exercícios', pathName: ''},
    pesquisar: {name: 'Pesquisar Profissional', pathName: ''},
    loja: {name: 'Loja', pathName: ''},
    chat: {name: 'Chat', pathName: ''}
  }
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
        {Object.keys(screenTargets).map(target => {
          return(
            <PrimaryButton
              text={screenTargets[target].name}
              onPress={event => {
                props.navigator.navigate(screenTargets[target].pathName);
              }} />
          );
        }
        )}
      </ScrollView>
    </View>
  );
}

export default MainMenu;