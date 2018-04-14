import React, { Component } from 'react';

import Titulo from './components/login/Logo';
import Logof from './components/login/Logof';
import Logot from './components/login/Logot';
import Wallpaper from './components/login/Wallpaper';
import Form from './components/login/Form';
import SignupSection from './components/login/SignupSection';
import ButtonSubmit from './components/login/ButtonSubmit';




// You can import from local files


// or any pure javascript modules available in npm// Version can be specified in package.json

export default class App extends Component {
  
  

  render() {
    return (
      <Wallpaper>

      <Titulo />
      <Titulo />
      <Logot />
      <Logof />
      <Form />
      <SignupSection />
      <ButtonSubmit />

      </Wallpaper>
    );
  }
}