import {
    INTERACTION_UPDATE,
    INTERACTION_CREATE,
    INTERACTION_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INTERACTION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case INTERACTION_CREATE:
            return INITIAL_STATE;
        case INTERACTION_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
