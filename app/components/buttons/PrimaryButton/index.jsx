import React, { Component } from 'react';
import { Button } from 'react-native-paper';

export default class PrimaryButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button
                style={{ ...this.props.style, minHeight: '10%' }}
                textColor="white"
				onPress={this.props.clickEvent}
                mode="contained"
                dark={true}
			>
				{this.props.text}
			</Button>
		);
	}
}
