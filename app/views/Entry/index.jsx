import { useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import gymImg from './../../assets/icon.png';

const Entry = (props) => {

	let styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'space-around',
			flexDirection: 'column',
			width: '100%',
		},
		headerContainer: {
			flex: 1,
			alignItems: 'center',
			width: '100%',
		},
		headerTitle: {
			fontSize: 27,
			fontWeight: 'bold'
		},
		headerSubtitle: {
			fontSize: 13
		},
		titlesContainer: {
			flex: 1,
			alignItems: 'center',
			width: '100%',
		},
		buttonsContainer: {
			width: '90%',
			justifyContent: 'space-evenly',
			marginTop: '20%'
		}

	});

	const loginRef = useNavigationContainerRef();
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.titlesContainer}>
					<Text
						adjustsFontSizeToFit={true}
						style={styles.headerTitle}
					>
						Bem vindo(a) novamente!
					</Text>
					<Text
						adjustsFontSizeToFit={true}
						style={styles.headerSubtitle}
					>
						Por favor, escolha o seu tipo de perfil
					</Text>
				</View>
				<Image
					source={gymImg}
					style={{ alignSelf: 'center' }}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<PrimaryButton
					style={{ height: '20%' }}
					text='Sou Personal'
					clickEvent={() => {
						props.navigation.navigate('Login');
					}}
				/>
				<PrimaryButton
					style={{ height: '20%' }}
					text='Sou Cliente'
					clickEvent={() => {
						props.navigation.navigate('Login');
					}}
				/>
			</View>
		</View>
	);
}

export default Entry;