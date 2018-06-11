
import {
    StackNavigator
} from 'react-navigation';

import { TouchableHighlight, StyleSheet, Image, View, TextInput } from 'react-native';
import React from 'react';

import DrawerScreen from './DrawerScreen';
import DrawerScreenR from './DrawerScreenR';
import logoImg from '../../images/menu4.png';
import campana from '../../images/campana4.png';
import buscar from '../../images/lupa3.png';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreenR}
}, {
  
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#009688',
            bordercolor: '#009688',
            paddingLeft: 10,
            paddingRight: 10
        },
         
        headerTintColor: 'white',
        headerLeft: <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
            <Image source={logoImg} style={styles.image} />
        
            </TouchableHighlight>
        <View  style={{
        width:260,
        alignItems: 'center',
        justifyContent: 'center',}}>
      <Image source={buscar}
                    style={styles.inlineImg} />
        <TextInput  style={styles.inputb}
          placeholder='Buscar por Categoria'
                    placeholderTextColor='grey'
                    underlineColorAndroid='transparent' />
      
        
      </View>
            
        </View>,
         headerRight:<View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
            <Image source={campana} style={styles.campana} />
        
            </TouchableHighlight>
      
        </View>
    })
    

    
})


export default DrawerNavigation;

const styles = StyleSheet.create({

    text: {
            color: 'white',
    },
    image:{
      width: 40,
        height: 40,
    },
        conthome:{
        paddingLeft: 255
    },
    campana:{
      width: 40,
        height: 40,
         
        
    },
        inputb: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        width: 190,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: 'black',
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 110,
        width: 33,
        height: 33,
        left: 38,
        top: 5,
    }, 

});