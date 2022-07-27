import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import GlobalStyle from '../../../utils/globalStyle';

export default class PrimaryButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button style={{ backgroundColor: GlobalStyle.theme.colors.primary}} onPress={this.props.clickEvent} dark={true} >{this.props.text}</Button>
        );
    }
}