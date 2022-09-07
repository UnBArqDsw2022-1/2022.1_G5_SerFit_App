import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../views/Stores';
import BottomTab from '../components/BottomTab';


import Profile from '../views/Profile';
import MyTraining from '../views/MyTraining';

import MainMenu from '../views/MainMenu';
import SelectCategory from '../views/SelectCategory';
import SelectExercise from '../views/SelectExercice';
import Exercise from '../views/Exercices';
import SelectStore from '../views/SelectStore';
import Store from '../views/Store';




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
				options={{ 
					title: 'Meu Perfil',
					headerTitleAlign: 'center',
				}}
			/>
			<AppStack.Screen
				name='MyTraining'
				component={MyTraining}
				options={{ title: 'Meu Treino' }}
			/>
			<AppStack.Screen
				name='SelectCategory'
				component={SelectCategory}
				options={{ title: '' }}
			/>
			<AppStack.Screen
				name='SelectExercise'
				component={SelectExercise}
				options={{ title: '' }}
			/>
			<AppStack.Screen
				name='Exercise'
				component={Exercise}
				options={{ title: '' }}
			/>
			<AppStack.Screen
				name='SelectStore'
				component={SelectStore}
				options={{ title: '' }}
			/>
			<AppStack.Screen
				name='Store'
				component={Store}
				options={{ title: '' }}
			/>
		</AppStack.Navigator>
		<BottomTab />
	</>
	)
};

export default AppRoutes;