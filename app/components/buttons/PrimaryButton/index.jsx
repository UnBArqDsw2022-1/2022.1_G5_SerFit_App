import React from 'react';
import { Button } from 'react-native-paper';


const PrimaryButton = (props) => {

	return (
		<Button
			style={{ ...props.style, 
					minHeight: '10%',
					justifyContent: 'center',
        			alignItems: 'center',  
			}}
			textColor="white"
			onPress={props.clickEvent}
			mode="contained"
			dark={true}
		>
			{props.text}
		</Button>
	);
}

export default PrimaryButton;
