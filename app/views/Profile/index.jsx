import React, { useState } from 'react';
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
import gymImg from './../../assets/icon.png';
import { TextInput } from 'react-native-paper';
import EditInput from '../../components/inputs/EditInput';



const Profile = (props) => {
	let styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-start',
			width: '100%',
		},
		divider: {
			height: '5%',
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		form: {
			width: '95%',
			minWidth: 200,
		},
		image: {
			width: '60%',
			resizeMode: 'contain',
			margin: 0,
			padding: 0,
		},
		forgotText:{
			fontSize: 14, 
			marginBottom:20, 
			marginTop: 20,
			color: '#FA6900'
		}

	});
	let [focused, setFocused] = useState(false);

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
						<Text
							adjustsFontSizeToFit={true}
							style={{ fontSize: 25 }}
						>
							{props.screenTitle}
						</Text>
					</View>
					<View style={styles.form}>
						
						<EditInput 
							label={'Nome'}
							fieldDefaultValue={name}
						/>
						<EditInput 
							label={'E-mail'}
							fieldDefaultValue={email}
						/>

						<EditInput 
							label={'Sobre você'}
							fieldDefaultValue={description}
						/>

					</View>
					<View style={{ ...styles.form, marginTop: 40, marginBottom: 40}}>
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
