import {
    COMMENT_UPDATE,
    COMMENT_CREATE,
    COMMENT_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMMENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case COMMENT_CREATE:
            return INITIAL_STATE;
        case COMMENT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
