import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Text,
    View,
    Alert

} from 'react-native';

export default class Formulario extends Component {

    constructor() {

        super()
        this.state = {

            nombre: '',
            correo: '',
            telefono: '',
            direccion: '',
            contrasena: ''
        }
    }

    changeNombre(nombre) {
        this.setState({ nombre })
    }

    changeCorreo(correo) {
        this.setState({ correo })
    }

    changeTelefono(telefono) {
        this.setState({ telefono })
    }

    changeDireccion(direccion) {
        this.setState({ direccion })
    }

    changeContrasena(contrasena) {
        this.setState({ contrasena })
    }

    botonPressed() {
        if (this.state.nombre && this.state.correo && this.state.telefono && this.state.direccion && this.state.contrasena) {
            Alert.alert(this.state.nombre + '' + this.state.correo + "" + this.state.telefono + "" + this.state.direccion + "" + this.state.contrasena)
        } else {
            Alert.alert('Debe llenar todos los campos')
        }
    }


    render() {

        return (

            <View style={ styles.container }>

                <View>

                    <TextInput
                        style={ styles.input }
                        placeholder="Nombre"
                        value={ this.state.nombre }
                        onChangeText={ (nombre) => this.changeNombre(nombre) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Correo"
                        value={ this.state.correo }
                        onChangeText={ (correo) => this.changeCorreo(correo) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Telefono"
                        value={ this.state.telefono }
                        onChangeText={ (telefono) => this.changeTelefono(telefono) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Direccion"
                        value={ this.state.direccion }
                        onChangeText={ (direccion) => this.changeDireccion(direccion) }

                    />

                    <TextInput
                        style={ styles.input }
                        placeholder="Contrasena"
                        value={ this.state.contrasena }
                        onChangeText={ (contrasena) => this.changeContrasena(contrasena) }

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
});    
