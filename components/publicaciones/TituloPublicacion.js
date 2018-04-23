import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/vender.png';

export default class Titulo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>Publicaciones</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		
		alignItems: 'center',
		top:10
	},
	image: {
		width: 120,
		height: 120,
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		fontSize: 20
	}
});
