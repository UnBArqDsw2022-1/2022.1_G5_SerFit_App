import { useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const Entry = (props) => {

	let styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'stretch',
			justifyContent: 'space-around',
			flexDirection: 'column',
			width: '100%',
		},

	});

        const loginRef = useNavigationContainerRef();
		return (
			<View style={styles.container}>
				<Image
					source={require('./../../assets/icon.png')}
					style={{ alignSelf: 'center' }}
				/>
                <View style={{ ...styles.container, justifyContent: 'space-evenly',}}>
					<PrimaryButton
                        style={{ height: '20%' }}
                        text='Sou Personal'
						clickEvent={() => {
							props.navigation.navigate('Login');
						}}
					/>
					<PrimaryButton
                        style={{ height: '20%', marginBottom: 25 }}
                        text='Sou Cliente'
                        clickEvent={() => {
							props.navigation.navigate('Login');
						}}
                    />
				</View>
			</View>
		);
}

export default Entry;