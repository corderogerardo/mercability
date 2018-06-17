import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/categorias.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>Registrar Categoria</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		
		alignItems: 'center',
		top:40
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		fontSize: 25
	}
});
