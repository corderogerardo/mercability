import {
    INVOICE_UPDATE,
    INVOICE_CREATE,
    INVOICE_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INVOICE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case INVOICE_CREATE:
            return INITIAL_STATE;
        case INVOICE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
