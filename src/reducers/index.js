import { ADD_MOVIES, FAVOURITE_MOVIE } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies(state = initialMoviesState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
            }
        case FAVOURITE_MOVIE: 
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        default:
            return state;
    }
}