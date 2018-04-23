import {
    CATEGORY_UPDATE,
    CATEGORY_CREATE,
    CATEGORY_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORY_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CATEGORY_CREATE:
            return INITIAL_STATE;
        case CATEGORY_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
