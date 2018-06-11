import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoprinc from '../images/logo1.png';

export default class logoprincipal extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoprinc} style={styles.imagen} />
				<Text style={styles.texto}>Mercability</Text>

				
					<Text style={styles.titulo}>Recuperación de Contraseña</Text>
				

			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {
		height:200,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:35,
	},

	imagen: {
		width: 80,
		height: 80,
	},

	texto: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 25
	},

	titulo: {
		fontSize: 27,
		color: 'white',
		fontWeight: 'bold',
		//borderWidth: 2,
		backgroundColor: 'transparent',
		marginTop: 50,

	},

});