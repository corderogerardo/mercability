import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import Login from './Login/Login';

import Registrar from './Registrar/Registrar';
import ForgotPassword from './ForgotPassword/ForgotPassword';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={Login} title="Please login" initial/>
                <Scene key="registrar" component={Registrar} title="Registrar" />
                <Scene key="forgetPassword" component={ForgotPassword} title="Forgot Password" />
                {/*<Scene key="menu" component={} title="Forgot Password" />*/}
            </Scene>
        </Router>
    );
};

export default RouterComponent;
