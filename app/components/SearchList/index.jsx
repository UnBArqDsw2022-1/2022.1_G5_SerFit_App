import { ListItem, Avatar } from "@rneui/themed";
import React from "react";
import { FlatList, Keyboard } from "react-native";
import base64 from "react-native-base64";

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    /** Funçaõ para utilização do base64 de buffers muito grandes
    const getImage64 = (intBuffer) => {
      let typedArray = new Uint8Array(intBuffer);
      let charBuffer = ''
      if(typedArray && typedArray.length  > 0)
        charBuffer = typedArray
            .reduce((accum, singleByte) => accum + String.fromCharCode(singleByte));

      return charBuffer ? base64.encode(charBuffer) : '';
    } 
    */

    return (
      <FlatList
        data={this.props.data}
        onScroll={() => Keyboard.dismiss()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            onPress={() => {
              this.props.navigation.navigate("PersonalProfile", 
                {
                  personalId: item.id,
                })
            }}
          >
            {
              // Inserir id do perfil como props
              // de navegação na Stash
              console.log(item.thumbnail)
            }
            <Avatar source={{uri: item.thumbnail, width: 50, heigtht: 50}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.mainInterest}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    );
  }
}
