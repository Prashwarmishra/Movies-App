import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}

export default function movies(state = initialMoviesState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES: 
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const favourites = state.favourites.filter((movie) => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites
            }
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }    
        default:
            return state;
    }
}