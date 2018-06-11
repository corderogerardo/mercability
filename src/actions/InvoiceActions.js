import { Actions } from 'react-native-router-flux';
import {
    INVOICE_UPDATE,
    INVOICE_CREATE,
    INVOICES_FETCH_SUCCESS,
    INVOICE_SAVE_SUCCESS
} from './types';

export const invoiceUpdate = ({ prop, value }) => {
    return {
        type: INVOICE_UPDATE,
        payload: { prop, value }
    };
};

export const invoiceCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: INVOICE_CREATE });
        //Actions.invoiceList({ type: 'reset' });
    };
};

export const invoicesFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //dispatch({ type: INVOICES_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const invoiceSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: INVOICE_SAVE_SUCCESS });
        //         Actions.invoiceList({ type: 'reset' });
    };
};

export const invoiceDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //         Actions.invoiceList({ type: 'reset' });
    };
};
