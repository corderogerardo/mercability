import React, { Component } from 'react';

import Logo from './components/login/Logo';
import Logof from './components/login/Logof';
import Logot from './components/login/Logot';
import Form from './components/login/Form';
import SignupSection from './components/login/SignupSection';
import ButtonSubmit from './components/login/ButtonSubmit';
import Wallpaper from './components/login/Wallpaper';

import { Actions } from 'react-native-router-flux';



// You can import from local files


// or any pure javascript modules available in npm// Version can be specified in package.json

export default class Login extends Component {
  
  

  render() {
    return (
     <Wallpaper>
    <Logo />
    <Logof />
    <Logot />
    <Form />
    <SignupSection />
    <ButtonSubmit />
    </Wallpaper>
    );
  }
}

