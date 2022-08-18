import { StatusBar } from 'expo-status-bar';
import React from 'react'
import LoginScreen from './views/LoginScreen';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStyle from './utils/globalStyle';
import Entry from './views/Entry';

const Stack = createStackNavigator();

export default function App() {
//   useEffect(() => {
//     teste();
//   }, []);
//   const teste = async () => {
//     try{
//       const { data } = await api.get("/");
//       console.log(data)
//     }
//     catch(error){
//       console.log(error)

//     }
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Yo, Ser Fit está rodando Broooooooooo!</Text>
//       <StatusBar style={styles.statusBar} />
//     </View>
//   );
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
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

