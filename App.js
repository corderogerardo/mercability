import React, { Component } from 'react';
import { View } from 'react-native';

/*
import Titulo from './components/login/Logo';
import Logof from './components/login/Logof';
import Logot from './components/login/Logot';
import Wallpaper from './components/login/Wallpaper';
import Form from './components/login/Form';
import SignupSection from './components/login/SignupSection';
import ButtonSubmit from './components/login/ButtonSubmit';
*/
// Engelber

import Menu from './components/Menu/Menu';
import Usuario from './components/usuario/fondo';
import LogoPrincipal from './components/usuario/logoprincipal';
//import UsoInput from './components/usuario/uso-input';
import Formulario from './components/usuario/formulario';


// este es para el registro de usuario
import TituloRegistroUsuario from './components/usuario/TituloRegistroUsuario';
import RegistroUsuario from './components/usuario/RegistroUsuario';


// You can import from local files


// or any pure javascript modules available in npm// Version can be specified in package.json

export default class App extends Component {
  
  

  render() {
    return (
   
     <Menu /> 
  
      //<Wallpaper>

      //<Titulo />
    
      //<Logot />
      //<Logof />
      //<Form />
      //<SignupSection />
      //<ButtonSubmit />

      //</Wallpaper>


      // Engelber

      //<Usuario>
      //<LogoPrincipal />
    // <Formulario />
      //</Usuario>


      // este para eñ registro de usuario
     // <View>
       // <RegistroUsuario />
       // <RegistroUsuario />
      
     // </View>


    );
  }
}