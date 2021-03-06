import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import _ from 'lodash';

import { constants } from './../config/config'

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CEDULA_CHANGED,
    NOMBRE_CHANGED,
    DIRECCION_CHANGED,
    TELEFONO_CHANGED,
    FECHANACIMIENTO_CHANGED,
    TOKEN_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const cedulaChanged = (text) => {
    return {
        type: CEDULA_CHANGED,
        payload: text
    };
};

export const nombreChanged = (text) => {
    return {
        type: NOMBRE_CHANGED,
        payload: text
    };
};

export const telefonoChanged = (text) => {
    return {
        type: TELEFONO_CHANGED,
        payload: text
    };
};

export const direccionChanged = (text) => {
    return {
        type: DIRECCION_CHANGED,
        payload: text
    };
};

export const fechanacimientoChanged = (text) => {
    return {
        type: FECHANACIMIENTO_CHANGED,
        payload: text
    };
};

export const tokenChanged = (text) => {
    return {
        type: TOKEN_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    console.log("email password " + email + ' ' + password);
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        let body = { email, password };
        const url = constants.apiUrlLocalG + 'users/login/';

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: {...body},
        // }).then(user => loginUserSuccess(dispatch, user))
        //     .catch((error) => loginUserFail(dispatch, error));

        axios.post(url, body )
            .then((user) => loginUserSuccess(dispatch, user))
            .catch((error) => loginUserFail(dispatch, error));

    };
};

export const registerUser = ({ email, password, cedula, nombre, direccion, telefono }) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER });
        let body = { email, password };
        body.person = { cedula, nombre, direccion, telefono };
        axios.post(constants.apiUrlLocal + `users`, { ...body })
            .then(user => registerUserSuccess(dispatch, user))
            .catch(() => registerUserFail(dispatch));
    };
};


const loginUserSuccess = (dispatch, user) => {
    console.log("user " + JSON.stringify(user));
    console.log("status " + user.status);
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    dispatch({
        type: TOKEN_CHANGED,
        payload: token['x-auth']
    });
    const token = _.pick(user.headers, ['x-auth']);
    console.log("token " + JSON.stringify(token['x-auth']));
    //Actions.menu();
};

const loginUserFail = (dispatch, error) => {
    console.log("error " + error);
    dispatch({ type: LOGIN_USER_FAIL });
};

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_USER_FAIL });
};

const registerUserSuccess = (dispatch, user) => {
    console.log("user " + JSON.stringify(user));
    console.log("status " + user.status);
    const token = _.pick(user.headers, ['x-auth']);
    console.log("token " + JSON.stringify(token['x-auth']));
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
    dispatch({
        type: TOKEN_CHANGED,
        payload: token['x-auth']
    });

    Actions.login();
};

/*
 export const registerCategoria = ({ nombre, descripcion }) => {
 return (dispatch) => {
 dispatch({ type: LOGIN_USER });
 let body = { email, password };
 // body.person = { nombre, descripcion };
 axios.post(constants.apiUrlLocal+`categories`, {...body})
 .then(user => registerUserSuccess(dispatch, user))
 .catch(function (e) {
 console.log("error " + e);
 })
 };
 };*/
