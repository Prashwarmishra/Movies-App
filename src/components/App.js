import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies, showFavourites } from '../actions';

class App extends React.Component{

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(() => {
      console.log('subscribe...');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));

    // console.log('state: ', store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(showFavourites(val));
  }

  render(){

    const { store } = this.props; 
    const { movies } = store.getState();
    const {list, favourites, showFavourites} = movies;

    const moviesList = showFavourites ? favourites : list;
    
    console.log('state', store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className = 'main'>
          <div className = 'tabs'>
            <div className = {`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
            <div className = {`tab ${showFavourites ? 'active-tabs' : ''}`} onClick = {() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className = 'list'>
            {
              moviesList.map((movie, index) => (
                <MovieCard 
                  movie = {movie} 
                  key = {`movie-id-${index}`}
                  dispatch = {store.dispatch}
                  isMovieFavourite = {this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
          { moviesList.length <= 0 ? <div className = 'no-movies' > No movies to show </div> : null }
        </div>
      </div>
    );
  }
}

export default App;
