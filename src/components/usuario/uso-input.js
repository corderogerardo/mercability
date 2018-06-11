import React, { Component } from 'react';
import {  
	View,
 	StyleSheet, 
 	TextInput,
 	Image, }
 from 'react-native';

 export default class UserInput extends Component {

 	state = {
        inputValue: "Puedes cambiarme!"
  	};

	_handleTextChange = inputValue => {
    	this.setState({ inputValue });
  	};

  	render() {

  		return (

  			<View style={styles.inputWrapper}>

  				<Image source{this.state.source} style={styles.inlineImg} />

  				<TextInput style={styles.input} 
  						   placeholder={this.props.placeholder}
  						   secureTextEntry={this.props.secureTextEntry}
  						   autoCorrect={this.props.autoCorrect}
  						   autoCapitalize={this.props.autoCapitalize}
  						   returnKeyType={this.props.returnKeyType}
  						   placeholderTextColor='white'
  						   underlineColorAndroid='transparent'/>

  			</View>
  		);

  	}

 }

 const styles = StyleSheet.create({

  inputWrapper:{
  	height: 55,
  	top: 5
  
},

  	input: {
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
 	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	}, 
  
});