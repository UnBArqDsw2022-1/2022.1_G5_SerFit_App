import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle';
import { Text, View} from 'react-native'

const EditInput = (props) => {
	const style = StyleSheet.create({
		inputContainer: {
			width: '100%',
			minWidth: 200,
			backgroundColor: GlobalStyle.theme.colors.backGround,
			justifyContent: 'center',
			textAlign: 'center'
			
		},
		placeholder: {
			color: GlobalStyle.theme.colors.backGround,
		},

		label:{
			marginBottom: 2,
			fontSize:15,
			color: '#FA6900'
		  },

		container: {
			marginTop: 12,
		}
	});

	const { label, placeholder, isSecret, type, fieldDefaultValue, setText } = props;
	return (
		<View style={style.container}> 
			<Text style={style.label}>{label}:</Text>
			<TextInput
				//label={label}
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
				onChangeText={text => setText(text)}
			/>
		</View>
	);
}


export default EditInput;