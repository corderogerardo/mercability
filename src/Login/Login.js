import React, { Component } from 'react';

import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Text,
    View,
    Alert
} from 'react-native';
import Logo from '../components/login/Logo';
import Logof from '../components/login/Logof';
import Logot from '../components/login/Logot';

import SignupSection from '../components/login/SignupSection';

import Wallpaper from '../components/login/Wallpaper';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged,loginUser, tokenChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from '../commom';



// You can import from local files


// or any pure javascript modules available in npm// Version can be specified in package.json
class Login extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
 
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
 
        this.props.loginUser({ email, password });
    }
 
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>;
        }
 
        return (
             <TouchableHighlight
                style={ styles.boton }
                onPress={ this.onButtonPress.bind(this) }
            >
                <Text style={ styles.textoBoton }>Login</Text>
            </TouchableHighlight>
        );
    }

        form() {
        return (
            <View style={ styles.container }>
                <View>
                   
                    <TextInput
                        style={ styles.input }
                        placeholder="Correo"
                        placeholderTextColor='white'
                       underlineColorAndroid='transparent'
                       value={ this.props.email }
                       onChangeText={ this.onEmailChange.bind(this) }
                       
                    />
                  
                    <TextInput
                        secureTextEntry
                        style={ styles.input }
                        placeholder="Contrasena"
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        value={ this.props.contrasena }
                        onChangeText={ this.onPasswordChange.bind(this) }                        

                    />

                 

                  
                </View>

            </View>
        );
    }




  render() {
    return (
     <Wallpaper>
    <Logo />
    <Logof />
    <Logot />
  
    <SignupSection />

    { this.form() }
    { this.renderButton() }
    </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
       
    },
  

    input: {
        //backgroundColor: '#2dc7b8',//'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: 'black',
        marginTop: 20,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderColor: '#009688',
        borderWidth: 0
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#073647',
        borderRadius: 20,
        marginTop: 25,
        marginHorizontal: 10,
        paddingLeft: 20,

    },

    textoBoton: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        height: 40,
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch'

    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
 
    return { email, password, error, loading };
};
 
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);