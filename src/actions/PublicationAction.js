import { Actions } from 'react-native-router-flux';
import {
    PUBLICATION_UPDATE,
    PUBLICATION_CREATE,
    PUBLICATIONS_FETCH_SUCCESS,
    PUBLICATION_SAVE_SUCCESS
} from './types';

export const publicationUpdate = ({ prop, value }) => {
    return {
        type: PUBLICATION_UPDATE,
        payload: { prop, value }
    };
};

export const publicationCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: PUBLICATION_CREATE });
        //Actions.publicationList({ type: 'reset' });
    };
};

export const publicationsFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //dispatch({ type: PUBLICATIONS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const publicationSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: PUBLICATION_SAVE_SUCCESS });
        //         Actions.publicationList({ type: 'reset' });
    };
};

export const publicationDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.publicationList({ type: 'reset' });
    };
};
