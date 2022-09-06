import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const BottomTab = () => {
    const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'row',
			width: '100%',
            height: '7%',
            backgroundColor: '#E5E5E5'
		},


	});

    const navigation = useNavigation() 

	return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.navigate('Home')}
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

        </View>
	);
}

export default BottomTab;