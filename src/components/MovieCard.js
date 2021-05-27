import React from 'react';
import { favouriteMovie } from '../actions';

class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const {movie, dispatch} = this.props;
        dispatch(favouriteMovie(movie));
    }

    handleUnfavouriteClick = () => {
        console.log('Unfavourite clicked');
    }

    render(){

        const {movie, isMovieFavourite} = this.props;
        return (
            <div className = 'movie-card'>
                <div className = 'left'>
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className = 'right'>
                    <div className = 'title'> {movie.Title} </div>
                    <div className = 'plot'> {movie.Plot} </div>
                    <div className = 'footer'>
                        <div className = 'rating'> imdb: {movie.imdbRating} </div>
                        {
                            isMovieFavourite
                            ? <button className='unfavourite-btn' onClick = {this.handleUnfavouriteClick}>Unfavourite</button>
                            : <button className='favourite-btn' onClick = {this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;