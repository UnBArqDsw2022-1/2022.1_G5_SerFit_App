// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default function ComponenteAbdomen() {
//     return (
//         <View style={styles.card}>
            // <Image style={styles.Image} resizeMode='center' source={require('./../../assets/barraFixa.png')} />
            // <Text style={styles.cardTitles}>Barra Fixa</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     card: {
//         backgroundColor: '#f0ffff',
//         paddingTop: 0,
//         paddingRight: 200,
//         paddingLeft: 10,
//         borderRadius: 30,
//         marginVertical: 5,
//         flexDirection: 'row'
//     },
//     cardTitles: {
//         color: '#FA6900',
//         fontSize: 12,
//         fontWeight: 'bold',
//         paddingRight: 10,
//         paddingLeft: 30,
//         paddingTop: 50,
//         adjustsFontSizeToFit: true,

//     },

//     Image: {
//         width: 180,
//         height: 126,
//         padding: 10,
//         borderRadius: 10
//     }

// });

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ExerciseComponent(props) {

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={props.clickEvent}
        >
            <Image style={styles.Image} resizeMode='center' source={require('./../../assets/barraFixa.png')} />
            <Text style={styles.cardTitles}>Barra Fixa</Text>
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