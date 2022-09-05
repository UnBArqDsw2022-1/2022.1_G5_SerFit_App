import React from 'react'
import LoginScreen from './views/LoginScreen';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStyle from './utils/globalStyle';
import Entry from './views/Entry';
import SearchProfessionals from './views/SearchProfessionals';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider theme={GlobalStyle.theme}>
			<NavigationContainer
				theme={{
					...GlobalStyle.theme,
					colors: {
						...GlobalStyle.theme.colors,
						background: 'transparent',
					},
				}}
			>
				<Stack.Navigator>
					<Stack.Screen
						name='EntryScreen'
						component={Entry}
						options={{ title: '' }}
					/>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
						options={{ title: 'Login' }}
					/>
                    <Stack.Screen
                        name='SearchProfessionals'
                        component={SearchProfessionals}
                        options={{title: 'Pesquisar profissionais'}}
                    />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

