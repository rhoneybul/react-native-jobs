import {
    FETCH_JOBS
} from '../actions/types';

export default function(state = { jobs: [] }, action) {
    switch(action.type) {
        case FETCH_JOBS:
            console.log("fetching jobs");
            return { ...state, jobs: action.payload }
        default:
            return {...state}
    }
}