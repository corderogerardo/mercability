import { Actions } from 'react-native-router-flux';
import {
    NOTIFICATION_UPDATE,
    NOTIFICATION_CREATE,
    NOTIFICATIONS_FETCH_SUCCESS,
    NOTIFICATION_SAVE_SUCCESS
} from './types';

export const notificationUpdate = ({ prop, value }) => {
    return {
        type: NOTIFICATION_UPDATE,
        payload: { prop, value }
    };
};

export const notificationCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: NOTIFICATION_CREATE });
        //Actions.notificationList({ type: 'reset' });
    };
};

export const notificationsFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //dispatch({ type: NOTIFICATIONS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const notificationSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: NOTIFICATION_SAVE_SUCCESS });
        //         Actions.notificationList({ type: 'reset' });
    };
};

export const notificationDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.notificationList({ type: 'reset' });
    };
};
