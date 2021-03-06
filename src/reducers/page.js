import {SET_YEAR} from '../actions/PageActions';

const initialState = {
    year:2018,
    photo:111
}

export function pageReducer(state= initialState,action) {
    switch (action.type) {
        case SET_YEAR:
            return { ...state, year: action.payload }

        default:
            return state
    }
}