import { StatusBar } from 'expo-status-bar';
import React from 'react'
import LoginScreen from './views/LoginScreen';
import { Provider, DefaultTheme } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#F125',
		backGround: '#00FA',
	},
};
export default function App() {
  return (
		<Provider theme={theme}>
			<LoginScreen />
		</Provider>
	);
}

