import React, { useState } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import EditInput from "../../components/inputs/EditInput";
import styles from "./styles";
import personalProfile from "../../assets/personal-profile.png";

const ProfilePersonalPeloCliente = (props) => {
  const [name, setName] = useState("Pedro da Silva");
  const [idade, setIdade] = useState("28");
  const [description, setDescription] = useState(
    "Personal Trainer a 5 anos, formado em Ed. Física na UnB, wpp: 5561984576321"
  );

  Keyboard.addListener("keyboardWillShow", () => {
    setFocused(true);
  });

  Keyboard.addListener("keyboardWillHide", () => {
    setFocused(false);
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.form}>
        <View style={styles.container}>
          <Image source={personalProfile} style={styles.user__image} />

          <View style={styles.form}>
            <EditInput
              label={"Nome"}
              fieldDefaultValue={name}
              setText={setName}
            />

            <EditInput
              label={"Idade"}
              fieldDefaultValue={idade}
              setText={setIdade}
            />

            <EditInput
              label={"Descrição"}
              fieldDefaultValue={description}
              setText={setDescription}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProfilePersonalPeloCliente;
