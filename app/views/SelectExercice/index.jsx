import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';

export default function SelectExercise(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>{props.route.params.screenTitle}</Text>

            <ScrollView style={styles.scroll}>
                <ScrollComponent 
                    componentName='Supino Reto'
                    componentImg='https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('Exercise', {
                            screenTitle: 'Supino Reto',
                            screenImg: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Supino Reto'
                    componentImg='https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('Exercise', {
                            screenTitle: 'Supino Reto',
                            screenImg: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Supino Reto'
                    componentImg='https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('Exercise', {
                            screenTitle: 'Supino Reto',
                            screenImg: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Supino Reto'
                    componentImg='https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('Exercise', {
                            screenTitle: 'Supino Reto',
                            screenImg: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Supino Reto'
                    componentImg='https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('Exercise', {
                            screenTitle: 'Supino Reto',
                            screenImg: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/iStock-1157237902-390x260.jpg'
                        });
                    }}
                />
                
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
        paddingBottom: 50,
    },
    scroll:{
        width: '95%',

    },
    title: {
        fontSize: 27,
        color: '#FA6900',
        fontWeight: 'bold',
        marginBottom: 40

    },

});