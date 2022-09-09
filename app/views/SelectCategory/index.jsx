import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';
import api from '../../services/api';

export default function SelectCategory(props) {
    const [exercisesCategories, setExercisesCategories] = useState([]);

    const getExercisesCategories = async () => {
        try{
            const { data } = await api.get("/exercise-categories");
        
            setExercisesCategories(data)

        }
        catch (error) {
            Alert.alert(
                "Erro na Requisição!",
                "Tente Novamente:",
                [
                  { text: "OK", onPress: () => console.log(error) }
                ]
              );
        }
    }

    useEffect(() => {
        getExercisesCategories();
    },[]);


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Exercícios</Text>

            <ScrollView style={styles.scroll}>
                {exercisesCategories.map((category, pos) => 
                    <ScrollComponent 
                        componentName={category.name}
                        componentImg={category.thumbnailUrl}
                        clickEvent={() => {
                            props.navigation.navigate('SelectExercise', {
                                screenTitle: category.name,
                                categoryId: category.id
                            });
                        }}
                        key={pos}
                    />
                )}
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