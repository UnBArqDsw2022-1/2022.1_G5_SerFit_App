import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle';

const EditInput = (props) => {
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

	const { label, placeholder, isSecret, type, fieldDefaultValue } = props;
	return (
		<>
			<TextInput
				label={label}
				mode='outlined'
                multiline
				selectionColor={GlobalStyle.theme.colors.primary}
				placeholder={placeholder}
				placeholderTextColor={GlobalStyle.theme.colors.primary}
				autoCompleteType={type}
				outlineColor={GlobalStyle.theme.colors.primary}
				style={style.inputContainer}
				secureTextEntry={isSecret}
                defaultValue={fieldDefaultValue}
			/>
		</>
	);
}

export default EditInput;
