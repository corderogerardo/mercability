import React, { Component } from 'react';
import {View, Text,Image,ScrollView,StyleSheet} from 'react-native';


import PerfilUsuario from './../../../components/usuario/perfilusuario';
import TituloPerfil from './../../../components/usuario/TituloPerfilUsuario';


class Screen2 extends Component {
    static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/use.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            

                <TituloPerfil />

                <PerfilUsuario />
                
            </ScrollView>
        );
    }
}

export default Screen2;


const styles = StyleSheet.create({
  contentContainer: {
    top: -380,
    paddingVertical: 380
  }
});