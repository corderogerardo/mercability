import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import Logo from '../components/login/Logo';
import Logof from '../components/login/Logof';
import Logot from '../components/login/Logot';
import Form from '../components/login/Form';
import SignupSection from '../components/login/SignupSection';
import ButtonSubmit from '../components/login/ButtonSubmit';
import Wallpaper from '../components/login/Wallpaper';
import { Button, Card, CardSection, Input, Spinner } from '../commom';


import { Actions } from 'react-native-router-flux';
import { StyleSheet } from "react-native";

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
            <Button style={styles.button} onPress={ this.onButtonPress.bind(this) }>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Wallpaper flex={1}>
                <Logo/>
                <Logof/>
                <Logot/>
                <Form/>
                <SignupSection/>
                { this.renderButton() }
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#073647',
        borderRadius: 20,
        zIndex: 10
    },
});


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
