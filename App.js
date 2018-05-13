import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './Login';
import Menus from './Menus';



export default class App extends Component {
  
  

  render() {
    return (
  <Router hideNavBar={true}>
  
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
      <Scene key="menus" component={Menus} title="menus" hideNavBar={true}/>
    </Stack>
  </Router>
    );
  }
}



  
