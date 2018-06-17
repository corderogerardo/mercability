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
import { nombreChanged, descripcionChanged, registerCategoria } from '../../actions';

class Formulario extends Component {
      

      changeNombre(text){
        this.props.nombreChanged(text)
      }

      changeDescripcion(text){
        this.props.descripcionChanged(text)
      }


   onButtonPress() {
        const { nombre, descripcion } = this.props;

        this.props.registerCategoria({ nombre, descripcion });
    }
    

    render() {

        return (

            <View style={styles.container}>
              <View>
              <TextInput 
						        style={styles.input}
						        placeholder="Nombre"
						        value={this.state.nombre}
                    onChangeText={ this.changeNombre.bind(this) }
                        
			       		/>
               <TextInput 
					         	style={styles.input}
					         	placeholder="Descripción"
						        value={this.state.descripcion}
                   onChangeText={ this.changeDescripcion.bind(this) }
                        					
					/>

                    <TouchableHighlight
						style={styles.boton}
						 onPress={ this.onButtonPress.bind(this) }
					>

						<Text style={styles.textoBoton}>Registrar</Text>

					</TouchableHighlight>

                    <TouchableHighlight
						style={styles.boton}
					>

						<Text style={styles.textoBoton}>Buscar</Text>

					</TouchableHighlight>

                    <TouchableHighlight
						style={styles.boton}

					>

						<Text style={styles.textoBoton}>Eliminar</Text>

					</TouchableHighlight>

                </View>               

            </View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
     height:120,
     paddingLeft: 15,
     paddingRight: 15,
     paddingTop: 20
    
    },

    input : {
        //backgroundColor: '#2dc7b8',//'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: 'white',
        marginTop:30,
        fontSize:20,
        backgroundColor: '#009688',
        borderColor: '#009688',
        borderWidth: 0
      },

      boton : {
        alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#073647',
	    borderRadius: 20,
	    //zIndex: 100,
    	marginTop:30,
	    marginHorizontal: 10,
        paddingLeft: 25,
       // width: 210,
        
    
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

const mapStateToProps = ({ auth }) => {
    const {
       nombre, descripcion
    } = auth;

    return { nombre, descripcion };
};


export default connect(mapStateToProps, {nombreChanged, descripcionChanged, registerCategoria})(Formulario);   