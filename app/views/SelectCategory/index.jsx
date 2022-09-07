import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import CategoryComponent from '../../components/CategoryComponent';

export default function SelectCategory(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Exercícios</Text>


            <ScrollView style={styles.scroll}>
                <CategoryComponent 
                    categoryName='Peitoral'
                    categoryImg='https://miro.medium.com/max/1001/1*9OrxMWzC6ARoatL1rrufQg.jpeg'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Peitoral',
                        });
                    }}
                />
                <CategoryComponent 
                    categoryName='Costas'
                    categoryImg='https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2021/10/Back-Workout.jpg'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Costas',
                        });
                    }}
                />
                <CategoryComponent 
                    categoryName='Pernas'
                    categoryImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JkCzoWw4nFFfZlWsKbvuUsX2nu9ucQzAw&usqp=CAU'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Pernas',
                        });
                    }}
                />
                <CategoryComponent 
                    categoryName='Braços'
                    categoryImg='https://img.huffingtonpost.com/asset/57aa49241700002d00d1dc1b.jpeg?cache=zT3rBf8pSa&ops=1778_1000'
                    clickEvent={() => {
                        props.navigation.navigate('SelectExercise', {
                            screenTitle: 'Braços',
                        });
                    }}
                />
                <CategoryComponent 
                    categoryName='Abdômen'
                    categoryImg='https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2010/05/Inside-the-Muscles-Best-Ab-Exercises.jpg'
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