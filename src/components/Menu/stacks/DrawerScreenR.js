import {DrawerNavigator, DrawerItems} from 'react-navigation';
import React  from 'react';

import {
  View,
 Text,
StyleSheet,
  Image
} from "react-native";




import Screen1 from '../components/screen1';


const CustomDrawerContentComponent = (props) => (
<View  style={{height: 160}}>
  <View style={{flex: 2, flexDirection: 'row', backgroundColor:"grey"}} >

        <Image
          style={styles.drawerImage}
          source={require('../images/use.png')} />
          <Text style={styles.text}>Engelber: ha comentado tu publicacion</Text>
</View>
      <DrawerItems {...props} />
   

  </View>

);

const CustomDrawer2 = (props) => (
<View  style={{height: 100}}>
  <View style={{flex: 2, flexDirection: 'row', backgroundColor:"blue"}} >

        <Image
          style={styles.drawerImage}
          source={require('../images/use.png')} />
          <Text style={styles.text}>Engelber: ha comentado tu publicacion</Text>
</View>
      <DrawerItems {...props} />
   

  </View>

);


const DrawerScreenR = DrawerNavigator({
     ver: {
    screen: Screen1
  },
 
},
  {
    initialRouteName: 'ver',
    drawerPosition: 'right',
    contentComponent: CustomDrawerContentComponent,
   
},{
    initialRouteName: 'Perfil',
    drawerPosition: 'right',
    contentComponent: CustomDrawer2,
   
});

export default DrawerScreenR;

const styles = StyleSheet.create({


  drawerImage: {
    height: 60,
    width: 60,
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

