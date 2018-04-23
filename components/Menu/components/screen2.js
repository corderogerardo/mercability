import React, { Component } from 'react';
import {View, Text,Image} from 'react-native';

import PerfilUsuario from './../../../components/usuario/perfilusuario';
import TituloPerfil from './../../../components/usuario/TituloPerfilUsuario';

class Screen2 extends Component {
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

                <TituloPerfil />

                <PerfilUsuario />
                
            </View>
        );
    }
}

export default Screen2;