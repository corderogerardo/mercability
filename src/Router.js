import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import Login from './Login/Login';

import Registrar from './Registrar/Registrar';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Menu from './Menu/Menu';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 29 }}>
            <Scene key="root">
                <Scene key="login" component={Login} title="Please login" />
                <Scene key="registrar" component={Registrar} title="Registrar" initial/>
                <Scene key="forgetPassword" component={ForgotPassword} title="Forgot Password" />
                <Scene key="menu" component={Menu} title="Forgot Password" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
