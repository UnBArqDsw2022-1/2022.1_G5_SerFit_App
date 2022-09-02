import { StatusBar} from 'expo-status-bar'; 
import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Componente from './Componente';

export default function SelectCategory(){
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Exercícios</Text>    
            
            <ScrollView>
                <Componente />
                <Componente />
                <Componente />
                <Componente />
                <Componente />
            </ScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'

    },
    title: {
        fontSize: 27,
        color: '#FA6900',
        fontWeight: 'bold',
        marginBottom: 40

    },

});