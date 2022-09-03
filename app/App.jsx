import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./views/LoginScreen";
import MainMenu from "./views/MainMenu";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalStyle from "./utils/globalStyle";
import Entry from "./views/Entry";
import Profile from "./views/Profile";

const Stack = createStackNavigator();

const screenTargets = {
  meuPerfil: { name: "Meu Perfil", pathName: "" },
  atividades: { name: "Atividades da Academia", pathName: "" },
  exercicios: { name: "Exercícios", pathName: "" },
  pesquisar: { name: "Pesquisar Profissional", pathName: "" },
  loja: { name: "Loja", pathName: "" },
  chat: { name: "Chat", pathName: "" },
};

export default function App() {
  return (
    <Provider theme={GlobalStyle.theme}>
      <NavigationContainer
        theme={{
          ...GlobalStyle.theme,
          colors: {
            ...GlobalStyle.theme.colors,
            background: "transparent",
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="EntryScreen"
              component={Entry}
              options={{ title: "Ser Fit App" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login" }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="MenuCliente"
              component={MainMenu}
              options={{
                title: "Menu Principal",
              }}
            />
            <Stack.Screen
              name="MenuPersonal"
              component={MainMenu}
              options={{
                title: "Menu Principal",
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: "Perfil Personal",
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
