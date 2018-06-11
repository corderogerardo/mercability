import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Text,
    View,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from '../commom';

class Registrar extends Component {

    onButtonPress() {
        const { email, password } = this.state;
        console.log("Email " + email);
        console.log("password " + password);
        this.setState({ error: '', loading: true });

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //   .then(this.onLoginSuccess.bind(this))
        //   .catch(() => {
        //     firebase.auth().createUserWithEmailAndPassword(email, password)
        //       .then(this.onLoginSuccess.bind(this))
        //       .catch(this.onLoginFail.bind(this));
        //   });
        this.onLoginSuccess.bind(true);
        return true;
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            cedula: '',
            nombre: '',
            direccion: '',
            telefono: '',
            fechaNacimiento: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }

        return (
            <Button onPress={ this.onButtonPress.bind(this) }>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <View style={ styles.container }>

                <View>

                    <TextInput
                        style={ styles.input }
                        placeholder="Nombre"
                        label="Nombre"
                        value={ this.props.nombre }
                        onChangeText={ this.onEmailChange.bind(this) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Correo"
                        value={ this.props.correo }
                        onChangeText={ (correo) => this.changeCorreo(correo) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Telefono"
                        value={ this.props.telefono }
                        onChangeText={ (telefono) => this.changeTelefono(telefono) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Direccion"
                        value={ this.props.direccion }
                        onChangeText={ (direccion) => this.changeDireccion(direccion) }

                    />

                    <TextInput
                        secureTextEntry
                        style={ styles.input }
                        placeholder="Contrasena"
                        value={ this.props.contrasena }
                        onChangeText={ this.onPasswordChange.bind(this) }

                    />

                    <TouchableHighlight
                        style={ styles.boton }
                        onPress={ () => this.botonPressed() }
                    >

                        <Text style={ styles.textoBoton }>Guardar</Text>

                    </TouchableHighlight>

                    <TouchableHighlight
                        style={ styles.boton }
                    >

                        <Text style={ styles.textoBoton }>Cerrar</Text>

                    </TouchableHighlight>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: 120,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20

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
        backgroundColor: '#009688',
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


export default connect(mapStateToProps,{})(Registrar);
