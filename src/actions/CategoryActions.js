import { Actions } from 'react-native-router-flux';
import {
    CATEGORY_UPDATE,
    CATEGORY_CREATE,
    CATEGORIES_FETCH_SUCCESS,
    CATEGORY_SAVE_SUCCESS
} from './types';

export const categoryUpdate = ({ prop, value }) => {
    return {
        type: CATEGORY_UPDATE,
        payload: { prop, value }
    };
};

export const categoryCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: CATEGORY_CREATE });

        //Actions.categoryList({ type: 'reset' });
    };
};

export const categoriesFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const categorySave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: CATEGORY_SAVE_SUCCESS });
        //         Actions.categoryList({ type: 'reset' });
    };
};

export const categoryDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.categoryList({ type: 'reset' });
    };
};
