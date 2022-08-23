import React from 'react';
import { StyleSheet } from 'react-native';
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

	const { label, placeholder, isSecret, type } = props;
	return (
		<>
			<TextInput
				label={label}
				mode='outlined'
				selectionColor={GlobalStyle.theme.colors.primary}
				placeholder={placeholder}
				placeholderTextColor={GlobalStyle.theme.colors.primary}
				autoCompleteType={type}
				outlineColor={GlobalStyle.theme.colors.primary}
				style={style.inputContainer}
				secureTextEntry={isSecret}
			/>
		</>
	);
}

export default LoginInput;
