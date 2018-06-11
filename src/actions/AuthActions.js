import { Actions } from 'react-native-router-flux';

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
    return (dispatch) => {

        dispatch({ type: REGISTER_USER });

    };
};

export const registerUser = ({ email, password, cedula, nombre, direccion, telefono, fechaNacimiento }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_USER_FAIL });
};

const registerUserSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};
