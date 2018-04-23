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

    constructor(){

		super()
		this.state = {

            codigo: '',
            nombre:'',
            descripcion:''
		}
      }
      
      changeCodigo(codigo){
        this.setState({codigo})
      }

      changeNombre(nombre){
        this.setState({nombre})
      }

      changeDescripcion(descripcion){
        this.setState({descripcion})
      }


      

      botonPressed(){
        if(this.state.codigo && this.state.nombre && this.state.descripcion){
          Alert.alert(this.state.codigo+ ''+ this.state.nombre +"" + this.state.descripcion)
        }else{
            Alert.alert('Debe llenar todos los campos')
        }
    }
    

    render() {

        return (

            <View style={styles.container}>

                 <View>

                     <TextInput 
						style={styles.input}
						placeholder="Código"
						value={this.state.codigo}
                        onChangeText={(codigo) => this.changeCodigo(codigo)}
                       
					
					/>

                    <TextInput 
						style={styles.input}
						placeholder="Nombre"
						value={this.state.nombre}
                        onChangeText={(nombre) => this.changeNombre(nombre)}
                        
					/>

                    <TextInput 
						style={styles.input}
						placeholder="Descripción"
						value={this.state.descripcion}
                        onChangeText={(descripcion) => this.changeDescripcion(descripcion)}
                        					
					/>

                    <TouchableHighlight
						style={styles.boton}
						onPress={() => this.botonPressed()}
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