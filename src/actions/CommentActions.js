import { Actions } from 'react-native-router-flux';
import {
    COMMENT_UPDATE,
    COMMENT_CREATE,
    COMMENTS_FETCH_SUCCESS,
    COMMENT_SAVE_SUCCESS
} from './types';

export const commentUpdate= ({ prop, value }) => {
    return {
        type: COMMENT_UPDATE,
        payload: { prop, value }
    };
};

export const commentCreate = ({ name, phone, shift }) => {
    //const { currentUser } = 'User Auth';

    return (dispatch) => {
        //dispatch({ type: COMMENT_CREATE });
        //         Actions.commentList({ type: 'reset' });
    };
};

export const commentsFetch = () => {
    //const { currentUser } = '';

    return (dispatch) => {
        //         dispatch({ type: COMMENTS_FETCH_SUCCESS, payload: snapshot.val() });
    };
};

export const commentSave = ({ name, phone, shift, uid }) => {
    //const { currentUser } = '';

    return (dispatch) => {

        //         dispatch({ type: COMMENT_SAVE_SUCCESS });
        //         Actions.commentList({ type: 'reset' });
    };
};

export const commentDelete = ({ uid }) => {
    //const { currentUser } = '';

    return () => {
        //Actions.commentList({ type: 'reset' });
    };
};
