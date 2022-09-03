import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function ComponenteCostas(){
    return (
            <View style={styles.card}> 
                <Image style={styles.Image} resizeMode='center'source={require('./../../assets/costas.jpg')}/>
                <Text style={styles.cardTitles}>Costas</Text>
            </View> 
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#f0ffff',
        paddingTop: 0,
        paddingRight: 200,
        paddingLeft: 10,
        borderRadius: 30,
        marginVertical: 5
    },
    cardTitles: {
        color: '#FA6900',
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 110,

    },

    Image: {
        width: 200,
        height: 140
    }

});