import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entry from '../views/Entry';
import LoginScreen from '../views/LoginScreen';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name='EntryScreen'
			component={Entry}
			options={{ title: '' }}
		/>
		<AuthStack.Screen
			name='Login'
			component={LoginScreen}
			options={{ title: 'Login' }}
		/>
	</AuthStack.Navigator>
);

export default AuthRoutes;