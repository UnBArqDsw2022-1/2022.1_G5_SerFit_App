import React, { useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import LoginInput from '../../components/inputs/LoginInput';
import GlobalStyle from '../../utils/globalStyle';
import EditInput from '../../components/inputs/EditInput';
import gymImg from './../../assets/icon.png';



const Profile = (props) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			// justifyContent: 'space-between',
			width: '100%'
		},
		divider: {
			height: '5%',
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		form: {
			width: '95%',
			minWidth: 200,
			marginTop: 20
		},
		image: {
			width: '50%',
			resizeMode: 'contain',
			// margin: 0,
			// marginBottom: 50,
			// padding: 0,
		},

	});

	const [name, setName] = useState('Usuário');
	const [email, setEmail] = useState('usuario@unb.br');
	const [description, setDescription] = useState('Gosto de malhar, correr e jogar futebol. Levo uma vida bastante saudável!!');

	Keyboard.addListener('keyboardWillShow', () => {
		setFocused(true);
	});

	Keyboard.addListener('keyboardWillHide', () => {
		setFocused(false);
	});

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback
				onPress={Keyboard.dismiss}
				style={styles.form}
			>
				<View style={styles.container}>
					<View style={styles.container}>
						<Image
								source={gymImg}
								style={styles.image}
							/>
					</View>
					<View style={styles.form}>
						
						<EditInput 
							label={'Nome'}
							fieldDefaultValue={name}
							setText={setName}
						/>
						<EditInput 
							label={'E-mail'}
							fieldDefaultValue={email}
							setText={setEmail}
						/>

						<EditInput 
							label={'Sobre você'}
							fieldDefaultValue={description}
							setText={setDescription}
						/>

					</View>
					<View style={{ ...styles.form, marginTop: 20, marginBottom: 15, width: '70%',}}>
						<PrimaryButton
							text='Salvar'
							clickEvent={() => {
								console.log('Clicked');
							}}
						/>
					</View>

					<View style={{ ...styles.form,  width: '70%', height: '15%' }}>
						<PrimaryButton
							text='Meus Clientes'
							clickEvent={() => {
								console.log('meus clientes');
							}}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Profile;
