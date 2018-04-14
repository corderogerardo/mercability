import React, { Component } from 'react';
import {  View, StyleSheet, TextInput,Image, } from 'react-native';



// You can import from local files


// or any pure javascript modules available in npm// Version can be specified in package.json

export default class UserInput extends Component {
  state = {
    inputValue: "You can change me!"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
      <Image source={this.props.source}
					style={styles.inlineImg} />
        <TextInput style={styles.input}
        placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={this.props.autoCorrect}
					autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
					placeholderTextColor='grey'
					underlineColorAndroid='transparent' />
      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

inputWrapper:{

  height: 55,
  top: 30
  
},

  	input: {
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: 'black',
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