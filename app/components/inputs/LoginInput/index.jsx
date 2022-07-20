import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default class LoginInput extends React.Component {
    render(props) {
        return <TextInput placeholder={props.placeholder} />;
    }
}