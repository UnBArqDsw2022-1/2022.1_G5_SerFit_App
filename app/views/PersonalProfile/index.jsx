import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-paper";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GlobalStyle from "../../utils/globalStyle";
import loggedApi from "../../services/loggedApi";
import api from "../../services/api";
import { Alert } from "react-native";
import personalProfile from "../../assets/personal-profile.png";
import AuthContext from "../../contexts/AuthContext";

const PersonalProfile = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      // justifyContent: 'space-between',
      width: "100%",
    },
    divider: {
      height: "5%",
      backgroundColor: GlobalStyle.theme.colors.backGround,
    },
    form: {
      width: "95%",
      minWidth: 200,
      marginTop: 20,
    },
    ageInfo: {
      borderBottomWidth: 1,
      borderBottomColor: "#FA6900",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: 20,
    },
    image: {
      width: 150,
      resizeMode: "contain",
      margin: 0,
      padding: 0,
      display: "flex",
      position: "relative",
      borderRadius: 10,
    },
    headerTitle: {
      fontSize: 27,
      fontWeight: "bold",
      color: "#FA6900",
    },
    headerSubTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FA6900",
    },
    headerSubTitleInfo: {
      fontSize: 16,
      fontWeight: "light",
      color: "#FA6900",
    },
    about: {
      borderBottomWidth: 1,
      borderBottomColor: "#FA6900",
      marginBottom: 20,
    },
  });

  const [name, setName] = useState("oi");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState();
  const [loading, setLoading] = useState(true);
  const [profileImg, setProfileImg] = useState('');

  const { id } = useContext(AuthContext);

  const getUserInfo = async () => {
    return loggedApi
      .get(`/user/${props.route.params.personalId}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.error("Error getting user data: ", error);
      });
  };

  useEffect(() => {
    getUserInfo()
      .then((user) => {
        setName(user.name);
        setEmail(user.email);
        setDescription(user.about);
        setProfileImg(user.thumbnail);
        console.log('thumbnail: ', user.thumbnail)
        if (user.age != null) {
          setAge(user.age.toString());
        }
        setLoading(false);
      })
    .catch(err => console.log('Failed to fetch user data: ', err));
    }, []);

  const updateInfo = async () => {
    const hiring = {
      clientId: id,
      personalId: props.route.params.personalId,
    };
    try {
      await api.post("/service-hiring/", hiring);
      Alert.alert("Sucesso!", "Serviço Contratado:", [
        { text: "OK", onPress: () => props.navigation.navigate("Menu") },
      ]);
    } catch (error) {
      Alert.alert("Erro na Requisição!", "Tente Novamente:", [
        { text: "OK", onPress: () => console.log(error) },
      ]);
    }
  };

  Keyboard.addListener("keyboardWillShow", () => {
    setFocused(true);
  });

  Keyboard.addListener("keyboardWillHide", () => {
    setFocused(false);
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.form}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>{name}</Text>
          <Image source={{uri: profileImg, width: 150, height: 150}} style={styles.image} />
          <View style={styles.form}>
            <View style={styles.ageInfo}>
              <Text style={styles.headerSubTitle}>Idade: </Text>
              <Text style={styles.headerSubTitleInfo}> {age}</Text>
            </View>
            <View style={styles.ageInfo}>
              <Text style={styles.headerSubTitle}>E-mail: </Text>
              <Text style={styles.headerSubTitleInfo}>{email}</Text>
            </View>
            <View style={styles.about}>
              <Text style={styles.headerSubTitle}>Sobre:</Text>
              <Text style={styles.headerSubTitleInfo}>{description}</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.form,
              marginTop: 20,
              marginBottom: 15,
              width: "70%",
            }}
          >
            <PrimaryButton
              text="Contratar Profissional"
              clickEvent={updateInfo}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PersonalProfile;
