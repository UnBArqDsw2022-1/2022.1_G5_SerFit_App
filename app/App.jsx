import { StatusBar } from 'expo-status-bar';
import React from 'react'
import LoginScreen from './views/LoginScreen';
import { Provider } from 'react-native-paper';
import GlobalStyle from './utils/globalStyle';
import { DefaultTheme } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#FA6900',
		secondary: '#D9D9D9',
		backGround: '#FFFFFF',
		placeholder: '#FA6900',
		tertiary: '#000000',
		accent: '#000FFF',
	},
};

export default function App() {
  return (
		<Provider theme={theme}>
			<LoginScreen />
		</Provider>
	);
}

