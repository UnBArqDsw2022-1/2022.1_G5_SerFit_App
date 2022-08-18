import React, { useState, useContext } from 'react';
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

import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';


const LoginScreen = (props) => {
	const [email, setEmail] = useState('email');
	const [password, setPassword] = useState('password');

	const { signed } = useContext(AuthContext);

	const handleSignIn = async () =>  {
		// email, password (formulário omitido)
		const response = await signIn(email);
		console.log(response);
		console.log(signed)
		// console.log(email)
		// console.log(password)

	}

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
						{!focused && (
							<Image
								source={gymImg}
								style={styles.image}
							/>
						)}
					</View>
					<View style={styles.form}>
						<LoginInput
							label='E-mail'
							placeholder='Insira seu e-mail'
							isSecret={false}
							type='email'
							setText={setEmail}
						/>
						<LoginInput
							label='Senha'
							placeholder='Insira sua senha'
							isSecret={true}
							type={'password'}
							setText={setPassword}

						/>
					</View>
					<View style={{ ...styles.form, marginTop: 40, }}>
						<PrimaryButton
							text='Entrar'
							clickEvent={handleSignIn}
						/>
					</View>
					<TouchableOpacity
						onPress={() => console.log('i forgot')}
					>
						<Text
							adjustsFontSizeToFit={true}
							style={styles.forgotText}
						>
							Esqueceu a senha?
						</Text>
					</TouchableOpacity>
					<View style={{ ...styles.form,  width: '70%', height: '15%' }}>
						<PrimaryButton
							text='Criar Nova Conta'
							clickEvent={() => {
								console.log('Create new account');
							}}
							color='#008AC6'
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
