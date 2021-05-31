import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies, showFavourites } from '../actions';
import { connect } from '../index';

class App extends React.Component{

  componentDidMount(){
    const {dispatch} = this.props;

    // store.subscribe(() => {
    //   console.log('subscribe...');
    //   this.forceUpdate();
    // })

    dispatch(addMovies(data));

    // console.log('state: ', store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(showFavourites(val));
  }

  render(){
    // const { store } = this.props; 
    // console.log('state', store.getState());
    const { movies, search } = this.props;
    const {list, favourites, showFavourites} = movies;
    const moviesList = showFavourites ? favourites : list;
    
    return (
      <div className="App">
        <Navbar 
          // dispatch = { store.dispatch } 
          search = { search }
        />
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
                  dispatch = {this.props.dispatch}
                  isMovieFavourite = {this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
          { moviesList.length <= 0 ? <div className = 'no-movies' > No movies to show </div> : null }
        </div>
      </div>
    )
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <App store = {store} />
//         }}
//       </StoreContext.Consumer>
//     )
//   }
// }

export function callback(state){
  return {
    movies: state.movies,
    search: state.search
  }
}

const ConnectedApp = connect(callback)(App);

export default ConnectedApp;
