import React, { Fragment, useEffect, useState } from "react";
import menuImage from "./../../assets/menu-image.png";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainMenu = (props) => {
  let [screenTargets, setScreenTargets] = useState({
    meuPerfil: { name: "Meu Perfil", pathName: "Profile", props: {} },
    atividades: { name: "Atividades da Academia", pathName: "SelectItem", props: {type: 'activities', title:'Atividades da Academia'} },
    pesquisar: { name: "Pesquisar Profissional", pathName: "SearchProfessionals", props: {} },
    exercicios: { name: "Exercícios", pathName: "SelectCategory", props: {} },
    loja: { name: "Lojas", pathName: "SelectItem", props: {type: 'stores', title: 'Lojas'} },
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
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexDirection: "column",
      width: "100%",
    },
    topImage: {
      alignSelf: "center",
      maxWidth: "100%",
      marginTop: 50
    },
    buttonGroup: {
      display: "flex",
      padding: 0,
      border: "none",
      flexDirection: "column",
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
      height: 100
    },
    button: {
      marginBottom: 15,
      height: 25,
      flexBasis: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.topImage} source={menuImage} />
      <View style={styles.buttonGroup}>
        {Object.keys(screenTargets).map((target, ind) => {
          return (
            <Fragment key={ind}>
              <PrimaryButton
                text={screenTargets[target].name}
                clickEvent={() => {
                  props.navigation.navigate(screenTargets[target].pathName, screenTargets[target].props);
                }}
                style={styles.button}
              />
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default MainMenu;
