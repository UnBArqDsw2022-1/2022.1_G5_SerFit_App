import { useNavigationContainerRef } from '@react-navigation/native';
import { color } from '@rneui/base';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import gymImg from './../../assets/icon.png';

const Entry = (props) => {

    let styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
        },
        headerContainer: {
            flex: 1,
            alignItems: 'center',
            width: '100%',
        },
        headerTitle: {
            fontSize: 27,
            fontWeight: 'bold',
            color: '#FA6900',
        },
        titlesContainer: {
            flex: 1,
            alignItems: 'center',
            width: '100%',
        },
        body: {
            flex: 2,
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
        },
        exerciceName: {
            fontSize: 22,
            color: '#FA6900',
        },
        exerciceDiscription: {
            fontSize: 13
        },
        viewExerciceName: {
            flex: 2,
            alignItems: 'center',
            width: '100%',
        },
        viewExerciceDiscription: {
            flex: 3,
            alignItems: 'center',
            width: '100%',
        },
        image: {
            width: '60%',
            resizeMode: 'contain',
            margin: 0,
            padding: 0,
        },

    });

    const loginRef = useNavigationContainerRef();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Exercício
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.exerciceName}>
                    Puxada Frontal
                </Text>
                <View style={styles.viewExerciceDiscription}>
                    <Text style={styles.exerciceDiscription}>
                        1. Sentar-se no banco do aparelho e apoiar os pés no chão.
                        2. Segurar a barra com uma pegada pronada com as mãos a uma distância um pouco mais afastadas do que a linha dos ombros.
                        3. Puxar a barra em direção ao peitoral, até esta chegar bem próxima e contrair ao máximo os músculos da dorsal. O tronco deve permanecer imóvel durante todo o movimento e as curvaturas fisiológicas da coluna devem ser preservadas.
                        Ao iniciar o exercício, o tronco deve estar ligeiramente inclinado e deve manter-se desta forma até o fim deste.
                        4. Retornar de forma cadenciada e controlada, garantindo um alongamento completo do músculo, durante a fase excêntrica até retornar a fase inicial.
                    </Text>
                    <Image style={styles.image}>

                    </Image>
                </View>
            </View>
        </View>
    );
}

export default Entry;