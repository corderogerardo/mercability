import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/n.png';

export default class Titulo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>Categorias</Text>
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
		width: 140,
		height: 80,
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		fontSize: 25
	}
});
