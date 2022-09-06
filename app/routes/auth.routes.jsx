import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entry from '../views/Entry';
import LoginScreen from '../views/LoginScreen';
import CadastroPersonal from '../src/pages/cadastroPersonal';
import CadastroUsuario from '../src/pages/cadastroUsuario';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name='Login'
			component={LoginScreen}
			options={{ title: 'Login' }}
		/>
		<AuthStack.Screen
			name='EntryScreen'
			component={Entry}
			options={{ title: '' }}
		/>
		<AuthStack.Screen
			name='CadastroPersonal'
			component={CadastroPersonal}
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
			component={CadastroUsuario}
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