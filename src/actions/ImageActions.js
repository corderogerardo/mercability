import { Actions } from 'react-native-router-flux';
import {
    IMAGE_UPDATE,
    IMAGE_CREATE,
    IMAGES_FETCH_SUCCESS,
    IMAGE_SAVE_SUCCESS
} from './types';

export const imageimage= ({ prop, value }) => {
    return {
        type: IMAGE_UPDATE,
        payload: { prop, value }
    };
};

export const imageCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: IMAGE_CREATE });
        //         Actions.imageList({ type: 'reset' });
    };
};

export const imagesFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //         dispatch({ type: IMAGES_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const imageSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: IMAGE_SAVE_SUCCESS });
        //         Actions.imageList({ type: 'reset' });
    };
};

export const imageDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //Actions.imageList({ type: 'reset' });
    };
};
