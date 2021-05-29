
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';
export const ADD_MOVIES_FROM_SEARCH_RESULT = 'ADD_MOVIES_FROM_SEARCH_RESULT';

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

export function addToMovies(movie){
    return {
        type: ADD_TO_MOVIES,
        movie
    }
}

export function handleMovieSearch(searchText){
    const url = `http://www.omdbapi.com/?apikey=6d404629&t=${searchText}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then((movie) => {
            console.log('movie-->', movie);
            dispatch(addMovieFromSearchResult(movie))
        })
    }
}

export function addMovieFromSearchResult(movie){
    return {
        type: ADD_MOVIES_FROM_SEARCH_RESULT,
        movie
    }
}
