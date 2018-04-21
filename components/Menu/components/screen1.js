
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class Example extends Component {
	static navigationOptions = {
    drawerIcon:(
      <Image
        source={require('../../images/home1.png')}
        style={{
    width: 24,
    height: 24,
  }}
/>)}
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
            {
        time: '09:00', 
        title: 'Celular Samsung Galaxy J5', 
        description: 'Cuatribanda modelo g570m 3G, HSDPA 4G LTE, Pantalla 5.0" resolución 720X1280, Procesador Quad-Core 1.4 GHz, Memoria RAM 2 GB, Memoria 16 GB (exp. 256 GB,Camara Trasera: 13 MP LED Flash, Bluetooth,Sistema Operativo: Android OS, v6.0.1 )  PRECIO:50$',
        lineColor:'#009688', 
        
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCUe5pRfflGnSTA_ZS3376tVOFunvulv1w5YE-7e8vBYVl1fB'
      },
      
      {
        time: '10:45', 
        title: 'Pc Armada Oficina Asus Core I7', 
        description: 'Microprocesador Intel Core i7 7700 - 4 Núcleos,8 Hilos - 3.6Ghz Base, Memoria RAM 8GB DDR4 2400Mhz, Gabinete Kit Sentey G18 con Fuente 450W + Kit Mouse  PRECIO:100$' , 
       
        imageUrl: 'https://img.clasf.es/2016/12/14/Ordenador-gamer-pc-sobremesa-msi-i7-20161214120437.jpg'
      },
      {
        time: '14:00', 
        title: 'Memoria Ram 4Gb', 
        description: 'SP Digital.cl: Memoria Ram 4Gb 1333Mhz 1.5V Sodimm para Macbook Pro Mac Mini iMac KINGSTON KTA-MB1333S/4G ID: 36555 PRECIO:20$',
        lineColor:'#009688', 
       
        imageUrl: 'https://www.spdigital.cl/img/products/new_web/1421360810836-17407063-8845.jpg'
      },
      {
        time: '16:30', 
        title: 'Pendrive Memoria Kingston', 
        description: 'Pendrive Memoria Kingston 16gb Clase 2.0 Negro Equiprog PRECIO:15$', 
        
        imageUrl: 'https://http2.mlstatic.com/D_Q_NP_863128-MLV25763828065_072017-Q.jpg'
      }
    ]
    this.state = {selected: null}
  } 

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>   
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelected()}
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
          separator={false}
          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});