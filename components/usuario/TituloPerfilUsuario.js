import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/use.png';

export default class Titulo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>Perfil del Usuario</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		
		alignItems: 'center',
		top:20
	},
	image: {
		width: 50,
		height: 50,
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		fontSize: 20
	}
});
