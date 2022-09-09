import React, { useEffect, useState, useContext } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	ActivityIndicator,
	
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import LoginInput from '../../components/inputs/LoginInput';
import GlobalStyle from '../../utils/globalStyle';
import EditInput from '../../components/inputs/EditInput';
import gymImg from './../../assets/icon.png';
import loggedApi from "../../services/loggedApi";
import AuthContext from '../../contexts/AuthContext';
import api from '../../services/api';
import { Alert } from "react-native";


const Profile = (props) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			// justifyContent: 'space-between',
			width: '100%'
		},
		divider: {
			height: '5%',
			backgroundColor: GlobalStyle.theme.colors.backGround,
		},
		form: {
			width: '95%',
			minWidth: 200,
			marginTop: 20
		},
		image: {
			width: '50%',
			resizeMode: 'contain',
			// margin: 0,
			// marginBottom: 50,
			// padding: 0,
		},

	});

	const [name, setName] = useState('oi');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');
	const [age, setAge] = useState();
	const [loading, setLoading] = useState(true);

	const { id } = useContext(AuthContext);


	const getUserInfo = async () => {
		return loggedApi
			.get(`/user/${id}`)
			.then((resp) => {
				return resp.data;
			})
			.catch((error) => {
				console.error("Error getting user data: ", error);
			});
	  };
	
	useEffect(() => {
		getUserInfo().then((user) => {
			setName(user.name);
			setEmail(user.email);
			setDescription(user.about);
			if(user.age != null){
				setAge(user.age.toString())
			}
			setLoading(false);
			
		});

	}, []);

	const updateInfo = async () => {
		const user = {
			name,
			email,
			about: description,
			age: parseInt(age)
		}
        try{
            await api.put(`/user/update/${id}`, user);
        
        }
        catch (error) {
            Alert.alert(
                "Erro na Requisição!",
                "Tente Novamente:",
                [
                  { text: "OK", onPress: () => console.log(error) }
                ]
              );
        }
    }
	

	Keyboard.addListener('keyboardWillShow', () => {
		setFocused(true);
	});

	Keyboard.addListener('keyboardWillHide', () => {
		setFocused(false);
	});

	if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

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
						<Image
								source={gymImg}
								style={styles.image}
							/>
					</View>
					<View style={styles.form}>
						
						<EditInput 
							label={'Nome'}
							fieldDefaultValue={name}
							setText={setName}
						/>
						<EditInput 
							label={'E-mail'}
							fieldDefaultValue={email}
							setText={setEmail}
						/>
						<EditInput 
							label={'Idade'}
							fieldDefaultValue={age}
							setText={setAge}
						/>

						<EditInput 
							label={'Sobre você'}
							fieldDefaultValue={description}
							setText={setDescription}
						/>

					</View>
					<View style={{ ...styles.form, marginTop: 20, marginBottom: 15, width: '70%',}}>
						<PrimaryButton
							text='Salvar Mudanças'
							clickEvent={updateInfo}
						/>
					</View>

				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Profile;
