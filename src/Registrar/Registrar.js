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
import { emailChanged, passwordChanged, cedulaChanged, nombreChanged, telefonoChanged, direccionChanged, fechanacimientoChanged, tokenChanged, registerUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from '../commom';

class Registrar extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onCedulaChanged(text) {
        this.props.cedulaChanged(text);
    }

    onNombreChanged(text) {
        this.props.nombreChanged(text);
    }

    onTelefonoChange(text) {
        this.props.telefonoChanged(text);
    }

    onDireccionChange(text) {
        this.props.direccionChanged(text);
    }

    onFechanacimientoChange(text) {
        this.props.fechanacimientoChanged(text);
    }

    onTokenChange(text) {
        this.props.tokenChanged(text);
    }

    onButtonPress() {
        const { email, password, cedula, nombre, direccion, telefono, fechaNacimiento } = this.props;

        this.props.registerUser({ email, password, cedula, nombre, direccion, telefono, fechaNacimiento });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="small"/>;
        }

        return (

            <TouchableHighlight
                style={ styles.boton }
                onPress={ this.onButtonPress.bind(this) }
            >
                <Text style={ styles.textoBoton }>Registrar</Text>
            </TouchableHighlight>


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
                        onChangeText={ this.onNombreChanged.bind(this) }
                    />
                    <TextInput
                        style={ styles.input }
                        placeholder="Cedula"
                        label="Cedula"
                        value={ this.props.cedula }
                        onChangeText={ this.onCedulaChanged.bind(this) }
                    />
                    <TextInput
                        style={ styles.input }
                        placeholder="Correo"
                        value={ this.props.email }
                        onChangeText={ this.onEmailChange.bind(this) }
                    />
                    <TextInput
                        style={ styles.input }
                        placeholder="Telefono"
                        value={ this.props.telefono }
                        onChangeText={ this.onTelefonoChange.bind(this) }
                    />
                    <TextInput
                        style={ styles.input }
                        placeholder="Direccion"
                        value={ this.props.direccion }
                        onChangeText={ this.onDireccionChange.bind(this) }
                    />
                    <TextInput
                        secureTextEntry
                        style={ styles.input }
                        placeholder="Contrasena"
                        value={ this.props.contrasena }
                        onChangeText={ this.onPasswordChange.bind(this) }

                    />

                    { this.renderButton() }
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        flex: 1
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
    const {
        email, password,
        error, loading, cedula, nombre, direccion, telefono, fechaNacimiento, token
    } = auth;

    return { email, password, cedula, nombre, direccion, telefono, fechaNacimiento, error, loading };
};


export default connect(mapStateToProps, {emailChanged, passwordChanged, cedulaChanged, nombreChanged, telefonoChanged, direccionChanged, fechanacimientoChanged, registerUser, tokenChanged})(Registrar);
