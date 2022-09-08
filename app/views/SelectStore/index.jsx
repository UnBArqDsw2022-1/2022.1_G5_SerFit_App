import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';
import api from '../../services/api';
import { Alert } from "react-native";


export default function SelectStore(props) {
    const [stores, setStores] = useState([]);

    const getStores = async () => {
        try{
            const { data } = await api.get("/stores");
        
            setStores(data)

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
        getStores();
    },[]);


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>Lojas</Text>

            <ScrollView style={styles.scroll}>
                {stores.map((store, pos) => 
                    <ScrollComponent 
                        componentName={store.name}
                        componentImg={store.thumbnailUrl}
                        clickEvent={() => {
                            props.navigation.navigate('Store', {
                                screenTitle: store.name,
                                screenImg: store.thumbnailUrl,
                                storeDescription: store.description
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