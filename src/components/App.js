import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

class App extends React.Component {
  render(){
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
              data.map((movie) => (
                <MovieCard movie = {movie} />
              ))
            }
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
