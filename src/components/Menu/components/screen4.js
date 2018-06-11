import React, { Component } from 'react';
import {View, Text,Image,ScrollView,StyleSheet} from 'react-native';


// Engelber

import Titulo from './../../../components/categorias/titulo';
import Formulario from '../../categorias/formulario';
//import BotonGeneral from './../../../components/categorias/BotonGeneral';


class Screen3 extends Component {
      static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/categorias2.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
    render() {
        return (
              <ScrollView contentContainerStyle={styles.contentContainer}>
            
                <Titulo />
                <Formulario />
                
            </ScrollView>
        );
    }
}

export default Screen3;


const styles = StyleSheet.create({
  contentContainer: {
    top: -380,
    paddingVertical: 380
  }
});
