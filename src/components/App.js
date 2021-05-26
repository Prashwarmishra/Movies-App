import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

class App extends React.Component{

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(() => {
      console.log('subscribe...');
      this.forceUpdate();
    })

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data,
    });

    console.log('state: ', store.getState());
  }


  render(){

    const {store} = this.props; 
    const movies = store.getState();
    console.log('movies', movies);

    return (
      <div className="App">
        <Navbar />
        <div className = 'main'>
          <div className = 'tabs'>
            <div className = 'tab'>Movies</div>
            <div className = 'tab'>Favourites</div>
          </div>
  
          <div className = 'list'>
            {
              movies.map((movie, index) => (
                <MovieCard movie = {movie} key = {`movie-id-${index}`} />
              ))
            }
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
