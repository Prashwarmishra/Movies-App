
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';

//action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addToFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function showFavourites(val){
    return {
        type: SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(searchText){
    const url = `http://www.omdbapi.com/?apikey=6d404629&s=${searchText}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then((movie) => {
            console.log('movie-->', movie);
        })
    }
}