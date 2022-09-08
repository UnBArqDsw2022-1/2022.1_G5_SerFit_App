import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';
import api from '../../services/api';

export default function SelectExercise(props) {
    const [exercises, setExercises] = useState([]);

    const getExercises = async () => {
        try{
            const { data } = await api.get("/exercises");
        
            setExercises(data.filter((category) => category.id == props.route.params.categoryId))

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
        getExercises();
    },[]);

 
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>{props.route.params.screenTitle}</Text>

            <ScrollView style={styles.scroll}>
                {exercises.map((exercise, pos) => 
                    <ScrollComponent 
                        componentName={exercise.name}
                        componentImg={exercise.thumbnailUrl}
                        clickEvent={() => {
                            props.navigation.navigate('Exercise', {
                                screenTitle: exercise.name,
                                screenImg: exercise.thumbnailUrl,
                                description: exercise.description,
                                videoUrl: exercise.videoUrl
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