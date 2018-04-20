import React, { Component } from 'react';
import {
		StyleSheet,
		KeyboardAvoidingView,
		TouchableOpacity,
		TextInput,
		TouchableHighlight,
		Text,
		View,
		Alert

} from 'react-native';



export default class formulario extends Component {

	/*
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  		this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }
*/  

  	constructor(){

		super()

		this.state = {

			correo: '',

		}
	  }

	  changeCorreo(correo){
		  this.setState({correo})
	  }

	  botonPressed(){
		  if(this.state.correo){
			Alert.alert(this.state.correo)
		  }else{
			  Alert.alert('DEbe colocar un correo')
		  }
	  }

    render() {
		return (

			<View style={styles.container}>

				<View>

					<TextInput 
						style={styles.input}
						placeholder="Correo Electronico"
						value={this.state.correo}
						onChangeText={(correo) => this.changeCorreo(correo)}
					
					/>


					<TouchableHighlight
						style={styles.boton}
						onPress={() => this.botonPressed()}
					>

						<Text style={styles.textoBoton}>Enviar</Text>

					</TouchableHighlight>

					<TouchableHighlight
						style={styles.botonvolver}
					>

						<Text style={styles.textoBotonvolver}>Volver al Login</Text>

					</TouchableHighlight>

				</View>

			</View>

			/*
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}/>

				<UsoInput placeholder='Correo'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />

						<TouchableOpacity
							activeOpacity={0.7}
							onPress={this.showPass}>
						</TouchableOpacity>


			</KeyboardAvoidingView>

			*/
			);
		




	}
}


const styles = StyleSheet.create({

  container: {
   height:120,
   paddingLeft: 15,
   paddingRight: 15
  
  },

  input : {
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
	height: 40,
	marginHorizontal: 20,
	paddingLeft: 45,
	borderRadius: 20,
	color: '#ffffff',
	marginTop:30,
	fontSize:20
  },

  boton : {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#073647',
	//height: MARGIN,
	borderRadius: 20,
	zIndex: 100,
	marginTop:30,
	marginHorizontal: 20,
	 paddingLeft: 45

  },

  textoBoton: {
	  textAlign: 'center',
	  color: 'white',
	  fontSize: 25,
	  height: 40,
	  paddingRight: 15

  },

  botonvolver: {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#073647',
	borderRadius: 20,
	zIndex: 100,
	marginTop:30,
	marginHorizontal: 20,
	paddingLeft: 45
  },

  textoBotonvolver: {
	textAlign: 'center',
	color: 'white',
	fontSize: 25,
	height: 40,
	paddingRight: 15
  }

});