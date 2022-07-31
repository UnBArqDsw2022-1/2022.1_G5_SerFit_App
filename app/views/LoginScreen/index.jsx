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
import { Text } from 'react-native-paper';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import LoginInput from '../../components/inputs/LoginInput';
import GlobalStyle from '../../utils/globalStyle';

const LoginScreen = (props) => {
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
								source={require('./icon.png')}
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
						/>
						<LoginInput
							label='Senha'
							placeholder='Insira sua senha'
							isSecret={true}
							type={'password'}
						/>
					</View>
					<View style={{ ...styles.form, margin: 50 }}>
						<PrimaryButton
							text='Login'
							clickEvent={() => {
								console.log('Clicked');
							}}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
