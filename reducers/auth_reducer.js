import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
} from '../actions/types';

// const INITIAL_STATE = { authenticated: false, token: null }

export default function(state={}, action) {
    switch(action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return { authenticated: true, token: action.payload };
        case FACEBOOK_LOGIN_FAIL:
            return { authenticated: false, token: null }
        default: 
            return state
    }
}