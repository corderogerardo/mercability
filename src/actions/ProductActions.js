import { Actions } from 'react-native-router-flux';
import {
    PRODUCT_UPDATE,
    PRODUCT_CREATE,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCT_SAVE_SUCCESS
} from './types';

export const productUpdate = ({ prop, value }) => {
    return {
        type: PRODUCT_UPDATE,
        payload: { prop, value }
    };
};

export const productCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: PRODUCT_CREATE });
        //         Actions.productList({ type: 'reset' });
    };
};

export const productsFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //         dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const productSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: PRODUCT_SAVE_SUCCESS });
        //         Actions.productList({ type: 'reset' });
    };
};

export const productDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.productList({ type: 'reset' });
    };
};
