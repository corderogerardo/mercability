import { Actions } from 'react-native-router-flux';
import {
    USER_UPDATE,
    USER_CREATE,
    USERS_FETCH_SUCCESS,
    USER_SAVE_SUCCESS
} from './types';

export const userUpdate = ({ prop, value }) => {
    return {
        type: USER_UPDATE,
        payload: { prop, value }
    };
};

export const userCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: USER_CREATE });
        //Actions.userList({ type: 'reset' });
    };
};

export const usersFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //dispatch({ type: USERS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const userSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: USER_SAVE_SUCCESS });
        //         Actions.userList({ type: 'reset' });
    };
};

export const userDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.userList({ type: 'reset' });
    };
};
