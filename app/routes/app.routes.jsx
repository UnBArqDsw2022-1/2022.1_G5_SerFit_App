import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../views/Stores';
import BottomTab from '../components/BottomTab';


import Profile from '../views/Profile';
import MyTraining from '../views/MyTraining';

import MainMenu from '../views/MainMenu';




const AppStack = createStackNavigator();

const AppRoutes = () => {
	return(
	<>
		<AppStack.Navigator>
			<AppStack.Screen
				name='Menu'
				component={MainMenu}
				options={{ 
					title: 'Menu Principal',
					headerTitleAlign: 'center',
					headerTitleStyle: {
						color: '#FA6900',
						fontWeight: 'bold',
						fontSize: 20,
						paddingTop: 20,
					}
				}}
			/>
			<AppStack.Screen
				name='Stores'
				component={Stores}
				options={{ title: 'Lojas' }}
			/>
			<AppStack.Screen
				name='Profile'
				component={Profile}
				options={{ title: 'Meu Perfil' }}
			/>
			<AppStack.Screen
				name='MyTraining'
				component={MyTraining}
				options={{ title: 'Meu Treino' }}
			/>
		</AppStack.Navigator>
		<BottomTab />
	</>
	)
};

export default AppRoutes;