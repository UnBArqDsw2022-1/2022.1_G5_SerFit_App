import { useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import gymImg from './../../assets/icon.png';


const Exercise = (props) => {

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

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerTitle}>
                    Exercício
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.exerciceName}>
                    {props.route.params.screenTitle}
                </Text>
                <Text style={styles.exerciceDiscription}>
                    {props.route.params.description}
                </Text>

                <Image
                    source={{ uri: props.route.params.screenImg }}
                    style={styles.image}
                />

            </View>
        </View>
    );
}

export default Exercise;