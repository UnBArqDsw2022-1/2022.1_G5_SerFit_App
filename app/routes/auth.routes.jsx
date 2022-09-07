import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entry from '../views/Entry';
import LoginScreen from '../views/LoginScreen';
import PersonalRegistration from '../views/PersonalRegistration';
import ClientRegistration from '../views/ClientRegistration';


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name='Login'
			component={LoginScreen}
			options={{ 
				title: 'SerFit', 
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: '#FA6900',
					fontWeight: 'bold',
					fontSize: 25,
					paddingTop: 20
				}
			}}
		/>
		<AuthStack.Screen
			name='EntryScreen'
			component={Entry}
			options={{ title: '' }}
		/>
		<AuthStack.Screen
			name='CadastroPersonal'
			component={PersonalRegistration}
			options={{ 
				title: 'Cadastro Personal', 
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: '#FA6900',
					fontWeight: 'bold',
					fontSize: 25,
					paddingTop: 20
				}
			}}

		/>
		<AuthStack.Screen
			name='CadastroCliente'
			component={ClientRegistration}
			options={{ 
				title: 'Cadastro Cliente', 
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: '#FA6900',
					fontWeight: 'bold',
					fontSize: 25,
					paddingTop: 20
				}
			}}
		/>
	</AuthStack.Navigator>
);

export default AuthRoutes;