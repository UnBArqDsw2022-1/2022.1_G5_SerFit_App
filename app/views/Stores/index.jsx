import { useNavigationContainerRef } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const Stores = (props) => {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
        },
      });

    return (
        <View style={styles.container}>
            <Text>Lojas</Text>
        </View>
    );
}

export default Stores;