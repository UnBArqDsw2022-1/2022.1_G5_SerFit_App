import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import ScrollComponent from '../../components/ScrollComponent';
import api from '../../services/api';
import { Alert } from "react-native";


export default function SelectItem(props) {
    const [Items, setItems] = useState([]);
    const [singleItemName, setSingleItemName] = useState('');

    const getItems = async () => {
        try{
            const { data } = await api.get(`/${props.route.params.type}`);
        
            setItems(data);


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
        getItems();

        if(props.route.params.type == 'stores'){
            setSingleItemName('Loja');
        }else{
            setSingleItemName('Atividade');
        }
    },[]);


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>{props.route.params.title}</Text>

            <ScrollView style={styles.scroll}>
                {Items.map((item, pos) => 
                    <ScrollComponent 
                        componentName={item.name}
                        componentImg={item.thumbnailUrl}
                        clickEvent={() => {
                            props.navigation.navigate('Item', {
                                screenType: singleItemName,
                                screenTitle: item.name,
                                screenImg: item.thumbnailUrl,
                                itemDescription: item.description
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