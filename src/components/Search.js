import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import * as BookUtility from '../BookUtility';
import './App.css'
import Book from '.Book';

class Search extends Component{
  state = {
    query: "",
  }
queryTimer = null;
//update the search and the give a quarter second to display
newQuery = (value) =>{
  clearTimeout(this.queryTimer);
  this.setState({query: value});
  this.queryTimer = setTimeout(this.updateSearch, 250);
}

renewSearch = () => {
  //does not allow empty searches
  if (this.state.query === ""){
    this.setState({error: false, books: []});
    return;
  }
}

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
   )
  }
}
