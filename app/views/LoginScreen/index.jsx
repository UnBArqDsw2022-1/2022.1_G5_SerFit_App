import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import LoginInput from '../../components/inputs/LoginInput';

class LoginScreen extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        divider: {
            height: '10%'
        },
        statusBar: 'auto',
    });

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={this.styles.container}>
                <LoginInput
                    label='E-mail'
                    placeholder='Insira seu e-mail'
                    isSecret={false}
                />
                <Divider style={this.styles.divider} />
                <LoginInput
                    label='Senha'
                    placeholder='Insira sua senha'
                    isSecret={true}
                />
            </View>
        );
    }
}

export default LoginScreen;