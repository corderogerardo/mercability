import React, { Component } from 'react';
import { StyleSheet, View, Image,  Alert,TouchableOpacity } from 'react-native';

import logoImg from '../images/logot.png';

import { Facebook } from "expo";

export default class Logo extends Component {
    _handleFacebookLogin = async () => {
      try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
          '1201211719949057', // Replace with your own app id in standalone app
          { permissions: ['public_profile'] }
        );

        switch (type) {
          case 'success': {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const profile = await response.json();
            Alert.alert(
              'Logged in!',
              `Hi ${profile.name}!`,
            );
            break;
          }
          case 'cancel': {
            Alert.alert(
              'Cancelled!',
              'Login was cancelled!',
            );
            break;
          }
          default: {
            Alert.alert(
              'Oops!',
              'Login failed!',
            );
          }
        }
      } catch (e) {
        Alert.alert(
          'Oops!',
          'Login failed!',
        );
      }
    };

    render() {
		return (
			<View style={styles.container}>
			<TouchableOpacity onPress={this._handleFacebookLogin}>
      <Image source={logoImg} style={styles.image} />
    </TouchableOpacity>
			
    
    
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 500,
		height: 15,
		top: -60,
		alignItems: 'center',
		justifyContent: 'center',
	},


});