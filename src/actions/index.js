
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const FAVOURITE_MOVIE = 'FAVOURITE_MOVIE';

//action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies,
    }
}

export function favouriteMovie(movie){
    return {
        type: FAVOURITE_MOVIE,
        movie,
    }
}