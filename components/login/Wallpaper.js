import React, { Component } from 'react';

import {
	StyleSheet,
ImageBackground,
KeyboardAvoidingView
} from 'react-native';

import bgSrc from '../images/fondo1.jpg';

export default class Wallpaper extends Component {
	render() {
		return (
			
			<ImageBackground style={styles.picture} source={bgSrc}>
				{this.props.children}
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
			</KeyboardAvoidingView>	
			</ImageBackground>
			
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
});


