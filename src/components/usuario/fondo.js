import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	KeyboardAvoidingView

} from 'react-native';

import Fondo from '../images/fondo1.jpg';

export default class fondo extends Component {

	render(){

		return (

			<ImageBackground style={styles.fondo} source={Fondo}>

			  {this.props.children}

				<KeyboardAvoidingView behavior='padding'>

				</KeyboardAvoidingView>

			</ImageBackground>

			);
	}
}

const styles = StyleSheet.create({

fondo: {
	flex: 1,
	width: null,
	height: null,
	resizeMode: 'cover',
	},

});

