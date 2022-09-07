import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';
import Componente4 from './Componente4';
import Componente5 from './Componente5';

export default function SelectExercise(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>{props.route.params.screenTitle}</Text>

            <ScrollView>
                <Componente1 />
                <Componente2 />
                <Componente3 />
                <Componente4 />
                <Componente5 />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 50

    },
    title: {
        fontSize: 27,
        color: '#FA6900',
        fontWeight: 'bold',
        marginBottom: 40

    },

});