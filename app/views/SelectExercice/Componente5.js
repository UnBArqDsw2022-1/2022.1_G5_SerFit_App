import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ComponentePernas() {
    return (
        <View style={styles.card}>
            <Image style={styles.Image} resizeMode='cover' source={require('./../../assets/remadaCurvada.png')} />
            <Text style={styles.cardTitles}>Remada Curvada</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#f0ffff',
        paddingTop: 0,
        paddingRight: 200,
        paddingLeft: 10,
        padding: 10,
        borderRadius: 30,
        marginVertical: 5,
        flexDirection: 'row'

    },
    cardTitles: {
        color: '#FA6900',
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 30,
        paddingTop: 50

    },

    Image: {
        width: 200,
        height: 140
    }

});