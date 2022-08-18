import { StatusBar } from 'expo-status-bar';
import React from 'react'
import LoginScreen from './views/LoginScreen';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStyle from './utils/globalStyle';
import Entry from './views/Entry';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

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
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</NavigationContainer>
		</Provider>
	);
}

