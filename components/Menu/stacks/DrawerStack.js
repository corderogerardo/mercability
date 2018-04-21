import {
    StackNavigator
} from 'react-navigation';

import {
    TouchableHighlight,StyleSheet,

    Image,
    View
} from 'react-native'
import React from 'react';

import DrawerScreen from './DrawerScreen';
import logoImg from '../../images/menu4.png'; 
import home from '../../images/campana4.png';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#009688',
            bordercolor: '#009688',
            paddingLeft: 10,
            paddingRight: 10
        },
        title: 'Menu',
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
            <View style={styles.conthome} >
                <Image source={home} style={styles.home} />
        </View>
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
    home:{
      width: 40,
        height: 40,
         
        
    },

});
