  import {DrawerNavigator, DrawerItems} from 'react-navigation';
import React  from 'react';

import {
  View,
 Text,
StyleSheet,
  Image
} from "react-native";




import Screen1 from '../components/screen1';
import Screen2 from '../components/screen2';
import Screen3 from '../components/screen3';
import Screen4 from '../components/screen4';
import Screen5 from '../components/screen5';

const CustomDrawerContentComponent = (props) => (
<View  style={{height: 380}}>
  <View style={{flex: 2, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', backgroundColor:"#009688"}} >

        <Image
          style={styles.drawerImage}
          source={require('../images/logo-menu.png')} />
          <Text style={styles.text}>Jesus Elias</Text>
</View>
      <DrawerItems {...props} />
   

  </View>

);


const DrawerScreen = DrawerNavigator({
     Home: {
    screen: Screen1
  },
    Perfil: {
    screen: Screen2
  },
  Publicar: {
    screen: Screen3
  },
   Categoria: {
    screen: Screen4
  },
   Salir: {
    screen: Screen5
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
   
});

export default DrawerScreen;

const styles = StyleSheet.create({


  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize: 18,
      alignItems: 'center',
    justifyContent: 'center',
  }


})
