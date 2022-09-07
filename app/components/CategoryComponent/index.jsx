import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CategoryComponent(props) {

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={props.clickEvent}
        >
            <Image style={styles.Image} resizeMode='center' source={{uri: props.categoryImg}} />
            <Text style={styles.cardTitles}>{props.categoryName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#f0ffff',
        paddingTop: 0,
        paddingRight: 200,
        paddingLeft: 10,
        borderRadius: 30,
        marginVertical: 5,
        flexDirection: 'row',
        padding: 10
    },
    cardTitles: {
        color: '#FA6900',
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 40,
        paddingTop: 40

    },

    Image: {
        width: 180,
        height: 105,
        borderRadius: 10,
        marginTop: 10
    }

});