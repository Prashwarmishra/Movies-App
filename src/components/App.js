import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies } from '../actions';

class App extends React.Component{

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(() => {
      console.log('subscribe...');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));

    console.log('state: ', store.getState());
  }


  render(){

    const {store} = this.props; 
    const {list} = store.getState();
    console.log('list', list);

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
              list.map((movie, index) => (
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
