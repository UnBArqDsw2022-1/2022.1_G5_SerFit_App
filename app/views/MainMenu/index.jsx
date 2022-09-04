import React, { Fragment, useEffect, useState } from "react";
import menuImage from "./../../assets/menu-image.png";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainMenu = (props) => {
  let [screenTargets, setScreenTargets] = useState({
    meuPerfil: { name: "Meu Perfil", pathName: "Profile" },
    atividades: { name: "Atividades da Academia", pathName: "" },
    exercicios: { name: "Exercícios", pathName: "" },
    pesquisar: { name: "Pesquisar Profissional", pathName: "ProfilePersonalPeloCliente" },
    loja: { name: "Loja", pathName: "" },
    chat: { name: "Chat", pathName: "" },
  });

  useEffect(() => {
    try {
      AsyncStorage.getItem("selectedAccount").then((accountType) => {
        console.log("Async being executed");
        if (accountType === "personal") {
          console.log(accountType);
          setScreenTargets({
            ...screenTargets,
            pesquisar: { name: "Meus Clientes", pathName: "" },
          });
        }
      });
    } catch (error) {
      console.log("Error getting account type", error);
    }
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "column",
      width: "100%",
    },
    topImage: {
      alignSelf: "center",
      maxWidth: "100%",
    },
    buttonGroup: {
      display: "flex",
      padding: 0,
      border: "none",
      flexDirection: "column",
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
    },
    button: {
      marginBottom: 15,
      height: 45,
      flexBasis: 100,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.topImage} source={menuImage} />
      <ScrollView style={styles.buttonGroup}>
        {Object.keys(screenTargets).map((target, ind) => {
          return (
            <Fragment key={ind}>
              <PrimaryButton
                text={screenTargets[target].name}
                onPress={(_event) => {
                  props.navigator.navigate(screenTargets[target].pathName);
                }}
                clickEvent={(_event) => {
                  props.navigation.navigate(screenTargets[target].pathName);
                }}
                style={styles.button}
              />
            </Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MainMenu;
