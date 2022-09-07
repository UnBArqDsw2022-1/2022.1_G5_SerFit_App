import { useNavigationContainerRef } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const MyTraining = (props) => {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
        },
      });

    return (
        <View style={styles.container}>
            <Text>Meu Treino</Text>
        </View>
    );
}

export default MyTraining;