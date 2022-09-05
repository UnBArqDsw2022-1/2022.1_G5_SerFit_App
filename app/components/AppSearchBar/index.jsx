import React, { useEffect } from "react";
import { View } from "react-native";
import loggedApi from "../../services/login";
import { TextInput } from "react-native-paper";

export default class AppSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={this.props.style}
        inputStyle={this.props.inputStyle}
        right={<TextInput.Icon icon="search-web" />}
      />
    );
  }
}
