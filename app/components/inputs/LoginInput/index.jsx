import React, { Component  } from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle'

class LoginInput extends Component {
	primaryColor = GlobalStyle.colors.primaryColor;
	style = StyleSheet.create({
		inputContainer: {
			width: '95%',
		},
		placeholder: {
			color: this.primaryColor,
		},
	});

	constructor(props) {
		super(props);
	}

	render() {
		let { label, placeholder, isSecret } = this.props;
		return (
			<>
				<TextInput
					label={label}
					selectionColor={this.primaryColor}
					placeholder={placeholder}
					placeholderTextColor={this.primaryColor}
					autoComplete='true'
					style={this.style.inputContainer}
					secureTextEntry={isSecret}
				/>
			</>
		);
	}
}


export default LoginInput;
