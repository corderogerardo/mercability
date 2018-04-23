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

            nombrepublicacion:'',
            desripcion:'',
            cantidad:'',
            precio:''
        }
        
      }

      changeNombrePublicacion(nombrepublicacion){
        this.setState({nombrepublicacion})
      }

      changeDesripcion(desripcion){
        this.setState({desripcion})
      }

      changeCantidad(cantidad){
        this.setState({cantidad})
      }


      changePrecio(precio){
        this.setState({precio})
      }


      botonPressed(){
        if(this.state.nombrepublicacion && this.state.desripcion && this.state.cantidad && this.state.precio){
          Alert.alert(this.state.nombrepublicacion+ ''+ this.state.desripcion +"" + this.state.cantidad +"" + this.state.precio)
        }else{
            Alert.alert('Debe llenar todos los campos')
        }
    }


      render() {

            return(

                <View style={styles.container}>

                    <View>

                        <TextInput 
                            style={styles.input}
                            placeholder="Nombre Publicación"
                            value={this.state.nombre}
                            onChangeText={(nombrepublicacion) => this.changeNombrepublicacion(nombrepublicacion)}
                       					
					    />

                        <TextInput 
                            style={styles.input}
                            placeholder="Desripcion"
                            value={this.state.desripcion}
                            onChangeText={(desripcion) => this.changeDesripcion(desripcion)}
                       					
					    />

                        <TextInput 
                            style={styles.input}
                            placeholder="Cantidad"
                            value={this.state.cantidad}
                            onChangeText={(cantidad) => this.changeCantidad(cantidad)}
                       					
					    />

                        <TextInput 
                            style={styles.input}
                            placeholder="Precio"
                            value={this.state.precio}
                            onChangeText={(precio) => this.changeCantidad(precio)}
                       					
					    />

                        <TouchableHighlight
                            style={styles.boton}
                            onPress={() => this.botonPressed()}
                        >

                            <Text style={styles.textoBoton}>Subir Foto</Text>

                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.boton}
                            onPress={() => this.botonPressed()}
                        >

                            <Text style={styles.textoBoton}>Publicar</Text>

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
        color: 'black',
        marginTop:20,
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
	    marginTop:25,
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


