import React from 'react';
import { handleMovieSearch } from '../actions';

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

    render (){
        
        return (
            <div className = 'nav'>
                <div className = 'search-container'>
                    <input type='text' onChange = {this.handleChange} />
                    <button id = 'search-btn' onClick = {this.handleSearch} >Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;