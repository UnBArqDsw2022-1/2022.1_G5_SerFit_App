import React, { Component, useState } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
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
			justifyContent: 'space-evenly',
			width: '100%',
		},
		divider: {
			height: '5%',
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		form: {
			width: '100%',
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

	Keyboard.addListener('keyboardDidShow', () => {
		setFocused(true)
	})

	Keyboard.addListener('keyboardDidHide', () => {
		setFocused(false);
	});

	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			style={styles.form}
		>
			<View style={styles.container}>
				<View
					style={{
						...styles.container,
						justifyContent: 'flex-start',
						marginTop: 50,
					}}
				>
					<Text adjustsFontSizeToFit={true} style={{ fontSize: 25 }}>
						Login do Cliente
					</Text>
					{!focused && <Image
						source={require('./icon.png')}
						style={styles.image}
					/>}
				</View>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					on
				>
					<View style={styles.form}>
						<LoginInput
							label='E-mail'
							placeholder='Insira seu e-mail'
							isSecret={false}
						/>
						<LoginInput
							label='Senha'
							placeholder='Insira sua senha'
							isSecret={true}
						/>
						<View style={{margin: 35}}>
							<PrimaryButton text='Login' />
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
