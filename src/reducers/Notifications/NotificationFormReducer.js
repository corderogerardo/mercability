import {
    NOTIFICATION_UPDATE,
    NOTIFICATION_CREATE,
    NOTIFICATION_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTIFICATION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case NOTIFICATION_CREATE:
            return INITIAL_STATE;
        case NOTIFICATION_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
