import React, { Component } from 'react';
import {View, Text,Image,headerText} from 'react-native';


// Engelber

import Titulo from './../../../components/categorias/Titulo';
import Formulario from './../../../components/categorias/Formulario';
//import BotonGeneral from './../../../components/categorias/BotonGeneral';


class Screen3 extends Component {
      static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/home1.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
    render() {
        return (
            <View>
                <Titulo />
                <Formulario />
                
            </View>
        );
    }
}

export default Screen3;