import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,TouchableOpacity,TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
		<TouchableHighlight
        style={styles.button}
        onPress={() => Actions.rusuario()} >
				<Text style={styles.text}>Create Account</Text>
				</TouchableHighlight>
					<TouchableOpacity onPress={this._handleFacebookLogin}>
				<Text style={styles.text}>Forgot Password?</Text>
					</TouchableOpacity>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
	container: {
		top: 75,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});
