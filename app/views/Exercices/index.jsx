import { useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import gymImg from './../../assets/icon.png';


const Entry = (props) => {

    let styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
        },
        headerTitle: {
            fontSize: 27,
            fontWeight: 'bold',
            color: '#FA6900',
        },
        body: {
            paddingTop: 50,
            alignItems: 'center',
            width: '100%'
        },
        exerciceName: {
            fontSize: 22,
            color: '#FA6900',
        },
        exerciceDiscription: {
            fontSize: 13,
            paddingTop: 50,
            paddingRight: 20,
            paddingLeft: 20,
        },
        image: {
            resizeMode: 'contain',
            width: 300,
            height: 300,
        }
    });

    const loginRef = useNavigationContainerRef();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerTitle}>
                    Exercício
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.exerciceName}>
                    Supino Reto
                </Text>
                <Text style={styles.exerciceDiscription}>
                    Para fazer o supino reto, é preciso em primeiro lugar se deitar no banco do equipamento, apoiando os pés no chão com os joelhos dobrados formando um ângulo de 90 graus entre as canelas e a coxa.
                </Text>

                <Image
                    source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg' }}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

export default Entry;