import {
    PUBLICATION_UPDATE,
    PUBLICATION_CREATE,
    PUBLICATION_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PUBLICATION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case PUBLICATION_CREATE:
            return INITIAL_STATE;
        case PUBLICATION_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
