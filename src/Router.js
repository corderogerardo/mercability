import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm/LoginForm';
import Registrar from './Registrar/Registrar';
import ForgotPassword from './ForgotPassword/ForgotPassword';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 30 }}>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please login" initial/>
                <Scene key="registrar" component={Registrar} title="Registrar" />
                <Scene key="forgetPassword" component={ForgotPassword} title="Forgot Password" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
