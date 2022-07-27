import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Button, Divider} from 'react-native-paper';
import LoginInput from '../../components/inputs/LoginInput';
import GlobalStyle from '../../utils/globalStyle';

class LoginScreen extends Component {
	styles = StyleSheet.create({
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
		},
		image: {
			width: '70%',
			resizeMode: 'contain',
			margin: 0,
			padding: 0,
		},
	});

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View
				icon={require('./icon.png')}
				style={this.styles.container}
			>
				<Image
					source={require('./icon.png')}
					style={this.styles.image}
				/>
				<View style={this.styles.form}>
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
					<Button style={{ marginTop: '15%' }}> Login </Button>
				</View>
			</View>
		);
	}
}

export default LoginScreen;