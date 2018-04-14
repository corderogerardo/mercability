import React, { Component } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,



} from 'react-native';

import UserInput from './UserInput';


import usernameImg from '../images/flecha2.png';


export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg} 
					placeholder='Codigo'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={usernameImg}
					placeholder='Nombre'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
					<UserInput source={usernameImg}
					placeholder='Descripcion'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
	
		
				
			
			</KeyboardAvoidingView>
		);
	}
}


const styles = StyleSheet.create({

  container: {
   height:280,
   top: 10,
    justifyContent: 'center',
    
   
    
  },




});
