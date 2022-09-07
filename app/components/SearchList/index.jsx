import { ListItem, Avatar } from "@rneui/themed";
import React from "react";
import { FlatList } from "react-native";

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            onPress={() => this.props.navigation.navigate("")}
          >
            {
              // Inserir id do perfil como props
              // de navegação na Stash
            }
            <Avatar source={item.thumbnail.toString("base64")} />
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
