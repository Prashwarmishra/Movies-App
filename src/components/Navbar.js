import React from 'react';
import { addToMovies, handleMovieSearch } from '../actions';
import { StoreContext } from '../index';
// import { data } from '../data';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState({
            searchText: text,
        });
    }
    
    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addToMovies(movie));
    }

    render (){
        
        const {result: movie, showSearchResults} = this.props.search;
        return (
            <div className = 'nav'>
                <div className = 'search-container'>
                    <input type='text' onChange = {this.handleChange} />
                    <button id = 'search-btn' onClick = {this.handleSearch} >Search</button>

                    {showSearchResults && 
                        <div className = 'search-results'>
                            <div className = 'search-result'>
                                <img src={movie.Poster} alt="movie-poster" />
                                <div className = 'movie-info'>
                                    <span> {movie.title} </span>
                                    <button onClick = { () => (this.handleAddToMovies(movie)) }>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

class NavbarWrapper extends React.Component{
    render(){
        return (
            <StoreContext.Consumer>
                {(store) => {
                    return <Navbar 
                                dispatch = {store.dispatch} 
                                search = {this.props.search}
                            />
                }}
            </StoreContext.Consumer>
        )
    }
}

export default NavbarWrapper;