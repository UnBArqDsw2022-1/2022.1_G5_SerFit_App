import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthContext from '../../contexts/AuthContext';

const BottomTab = () => {
    const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'row',
			width: '100%',
            height: '6.5%',
            backgroundColor: '#E5E5E5'
		},
	});

    const navigation = useNavigation();

    const { signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }

	return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.navigate('Menu')}
            >
                <Text> Menu </Text>
            </Button>
            <Button
                onPress={() => navigation.navigate('Profile')}
            >
                <Text> Perfil </Text>
            </Button>
			<Button
                onPress={() => navigation.navigate('MyTraining')}
            >
                <Text> Treino </Text>
            </Button>
            <Button
                onPress={handleSignOut}
            >
                <Text> Sair </Text>
            </Button>
        </View>
	);
}

export default BottomTab;