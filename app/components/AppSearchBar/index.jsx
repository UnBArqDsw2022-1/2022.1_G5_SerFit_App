import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import GlobalStyle from '../../utils/globalStyle';

export default class AppSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = StyleSheet.create({
      inputContainer: {
        width: "100%",
        minWidth: 200,
        backgroundColor: GlobalStyle.theme.colors.backGround,
      },
    });
    return (
      <TextInput
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={style.inputContainer}
        inputStyle={this.props.inputStyle}
      />
    );
  }
}
