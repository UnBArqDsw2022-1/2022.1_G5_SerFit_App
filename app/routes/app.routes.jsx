import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Stores from '../views/Stores';
import BottomTab from '../components/BottomTab';


import Profile from '../views/Profile';
import MyTraining from '../views/MyTraining';




const AppStack = createStackNavigator();

const AppRoutes = () => {
	return(
	<>
		<AppStack.Navigator>
			<AppStack.Screen
				name='Home'
				component={Home}
				options={{ title: '' }}
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