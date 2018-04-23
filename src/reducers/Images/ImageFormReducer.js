import {
    IMAGE_UPDATE,
    IMAGE_CREATE,
    IMAGE_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case IMAGE_CREATE:
            return INITIAL_STATE;
        case IMAGE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
