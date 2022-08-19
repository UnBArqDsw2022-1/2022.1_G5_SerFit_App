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
					<View style={styles.container}>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Meu Perfil'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Atividades'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Exercícios'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Pesquisar Profissional'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Loja'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
						<View style={{ ...styles.form, marginTop: 40, }}>
							<PrimaryButton
								text='Chat'
								clickEvent={() => {
									console.log('Clicked');
								}}
							/>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
