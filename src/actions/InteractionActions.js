import { Actions } from 'react-native-router-flux';
import {
    INTERACTION_UPDATE,
    INTERACTION_CREATE,
    INTERACTIONS_FETCH_SUCCESS,
    INTERACTION_SAVE_SUCCESS
} from './types';

export const interactionUpdate= ({ prop, value }) => {
    return {
        type: INTERACTION_UPDATE,
        payload: { prop, value }
    };
};

export const interactionCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: INTERACTION_CREATE });
        //         Actions.interactionList({ type: 'reset' });
    };
};

export const interactionsFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //         dispatch({ type: INTERACTIONS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const interactionSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: INTERACTION_SAVE_SUCCESS });
        //         Actions.interactionList({ type: 'reset' });
    };
};

export const interactionDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //Actions.interactionList({ type: 'reset' });
    };
};
