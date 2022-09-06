import { useNavigationContainerRef } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AuthContext from '../../contexts/AuthContext';


const Home = (props) => {
    const { signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
        },
      });

    return (
        <View style={styles.container}>
            <Text>Yo, Ser Fit está rodando Broooooooooo!</Text>
            <Button title="Sair" onPress={handleSignOut} />
            <Button 
                title="Lojas" 
                onPress={() => {
					props.navigation.navigate('Stores');
				}}
            />

        </View>
    );
}

export default Home;