import { DefaultTheme } from 'react-native-paper';

class GlobalStyle {
	static theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: '#FA6900',
			secondary: '#D9D9D9',
			backGround: '#FFFFFF',
			placeholder: '#FA6900',
			tertiary: '#000000',
			accent: '#000000',
		},
	};
}

export default GlobalStyle;
