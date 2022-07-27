import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle';

const LoginInput = (props) => {
	const style = StyleSheet.create({
		inputContainer: {
			width: '100%',
			minWidth: 200,
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		placeholder: {
			color: GlobalStyle.theme.colors.backGround,
		},
	});

	const { label, placeholder, isSecret } = props;
	return (
		<>
			<TextInput
				label={label}
				selectionColor={GlobalStyle.theme.colors.primary}
				placeholder={placeholder}
				placeholderTextColor={GlobalStyle.theme.colors.primary}
				autoComplete='true'
				outlineColor={GlobalStyle.theme.colors.primary}
				style={style.inputContainer}
				secureTextEntry={isSecret}
			/>
		</>
	);
}

export default LoginInput;
