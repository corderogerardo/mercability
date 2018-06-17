import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import Login from './Login/Login';
import Menus from './Menu/Menus';
import Registrar from './Registrar/Registrar';
import ForgotPassword from './ForgotPassword/ForgotPassword';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Login" component={Login} title="Login" hideNavBar={true}/> 
    			<Scene key="Menus" component={Menus} title="Login" hideNavBar={true}/> 
                <Scene key="Registrar" component={Registrar} title="Registrar" />
                
            </Scene>
        </Router>
    );
};

export default RouterComponent;
