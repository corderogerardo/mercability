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
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    cedula: '',
    nombre: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    token: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log("action " +JSON.stringify(action));
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CEDULA_CHANGED:
            return { ...state, cedula: action.payload };
        case NOMBRE_CHANGED:
            return { ...state, nombre: action.payload };
        case DIRECCION_CHANGED:
            return { ...state, direccion: action.payload };
        case TELEFONO_CHANGED:
            return { ...state, telefono: action.payload };
        case FECHANACIMIENTO_CHANGED:
            return { ...state, fechanacimiento: action.payload };
        case TOKEN_CHANGED:
            return { ...state, token: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case REGISTER_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state;
    }
};
