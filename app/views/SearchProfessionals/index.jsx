import { Keyboard, ScrollView, View } from "react-native";
import SearchList from "./../../components/SearchList";
import AppSearchBar from "./../../components/AppSearchBar";
import React, { useEffect, useState } from "react";
import loggedApi from "../../services/loggedApi";

const SearchProfessionals = (props) => {
  let [personals, setPersonals] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [allPersonals, setAllPersonals] = useState([]);

  const interestsTypes = [
    "academia",
    "danca",
    "esportes radicais",
    "ginastica",
    "musculacao",
    "natacao",
    "outros",
    "skate",
    "surf",
    "outros",
  ];

  const getPersonals = async (props) => {
    return loggedApi
      .get("/user/find", { params: { accountType: "personal" } })
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.error("Error getting personals data: ", error);
      });
  };

  useEffect(() => {
    getPersonals().then((personals) => {
      setPersonals(personals);
      setAllPersonals(personals);
    });
  }, []);

  return (
    <View onPress={Keyboard.dismiss} onTouchMove={Keyboard.dismiss}>
      <AppSearchBar
        value={searchQuery}
        placeholder="Pesquisa por profissional"
        onChangeText={(input) => {
          setSearchQuery(input);
          if (!input) setPersonals(allPersonals);
          else {
            if (interestsTypes.filter((item) => item === input).length > 0) {
              setPersonals(
                allPersonals.filter(
                  (personal) => personal.mainInterest === input
                )
              );
            }
            else {
              console.log('Filtrando nomes: ');
              setPersonals(
                allPersonals.filter((item) => {
                  return item.name?.includes(input);
                })
              );
            }
          }
        }}
        inputStyle={{}}
      />
      <SearchList 
        data={personals} 
        navigation={props.navigation}
      />
    </View>
  );
};

export default SearchProfessionals;
