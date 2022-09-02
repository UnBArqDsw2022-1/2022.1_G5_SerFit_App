import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Componente(){
    return (
        <View style={styles.card}> 
                <Image style={styles.Image} resizeMode='center'source={require('./peitoral.jpg')}/>
                <Text style={styles.cardTitles}>Peitoral</Text>
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
        fontWeight: 'bold'

    },

    Image: {
        width: 200,
        height: 200
    }

});