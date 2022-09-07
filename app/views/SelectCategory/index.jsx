import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';

export default function SelectCategory(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Exercícios</Text>


            <ScrollView style={styles.scroll}>
                <ScrollComponent 
                    componentName='Peitoral'
                    componentImg='https://miro.medium.com/max/1001/1*9OrxMWzC6ARoatL1rrufQg.jpeg'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Peitoral',
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Costas'
                    componentImg='https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2021/10/Back-Workout.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Costas',
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Pernas'
                    componentImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JkCzoWw4nFFfZlWsKbvuUsX2nu9ucQzAw&usqp=CAU'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Pernas',
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Braços'
                    componentImg='https://img.huffingtonpost.com/asset/57aa49241700002d00d1dc1b.jpeg?cache=zT3rBf8pSa&ops=1778_1000'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Braços',
                        });
                    }}
                />
                <ScrollComponent 
                    componentName='Abdômen'
                    componentImg='https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2010/05/Inside-the-Muscles-Best-Ab-Exercises.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Abdômen',
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