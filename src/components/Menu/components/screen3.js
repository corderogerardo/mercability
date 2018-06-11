import React, { Component } from 'react';
import {View, Text,Image,ScrollView,StyleSheet} from 'react-native';


import TituloPublicacion from '../../publicaciones/TituloPublicacion';
import Publicacion from '../../publicaciones/Publicacion';

class Screen3 extends Component {
      static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/flecha.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
    render() {
        return (
             <ScrollView contentContainerStyle={styles.contentContainer}>
               <TituloPublicacion />
               <Publicacion />
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
