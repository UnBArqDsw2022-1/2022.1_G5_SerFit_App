import React from 'react'
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStyle from './utils/globalStyle';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';

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

