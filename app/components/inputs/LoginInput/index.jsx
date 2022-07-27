import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle';

const LoginInput = (props) => {
	const style = StyleSheet.create({
		inputContainer: {
			width: '95%',
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		placeholder: {
			color: GlobalStyle.theme.colors.backGround,
		},
	});

	const { label, placeholder, isSecret } = props;
	let [isFocused, setFocused] = useState(false);
	const setOnFocus = () => { setFocused(true); }
	return (
		<>
			<TextInput
				label={label}
				selectionColor={GlobalStyle.theme.colors.primary}
				placeholder={placeholder}
				placeholderTextColor={GlobalStyle.theme.colors.primary}
				autoComplete='true'
				outlineColor={GlobalStyle.theme.colors.primary}
				style={
					isFocused
						? { ...style.inputContainer, height:500, zIndex: 1000 }
						: style.inputContainer
				}
				secureTextEntry={isSecret}
				onFocus={(_event) => { setOnFocus(); }}
				onBlur={(_event) => { setFocused(false); }}
			/>
		</>
	);
}

export default LoginInput;
