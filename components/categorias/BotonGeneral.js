import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View
} from 'react-native';

export default class BotonGeneral extends Component {

    render() {

        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.button}>

                    <Text style={styles.text}></Text>

                </TouchableOpacity>                

            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    
    button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#073647',
		
		width:140,
		borderRadius: 20,
		zIndex: 100,
    },
    
    text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	
});