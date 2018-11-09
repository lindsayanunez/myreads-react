import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import * as BookUtility from '../BookUtility';
import './App.css'
import Book from '.Book';

class Search extends Component{
  state = {
    query: "",
    books: [],
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
//Search for the query and the yield the response
  BooksAPI
    .search(this.state.query)
    .then(response => {
      let updatedList = [];
      let updatedError = false;
      //Check for errors, existing books, make sure a book matches the query
      if (response === undefined || (response.error && response.error !== "empty query")){
        updatedError = true;
      }else if(response.length){
        //check books already on the shelf vs search results and update shelf
        updatedList = BooksUtility.mergeShelfSearch(this.props.selectedBooks, response);
        updatedList = BooksUtility.sortAllBooks(updatedList);
      }

      //Set the state based on error response
      this.setSate({error: newError, books: newList});
    })
}

//merge shelf - sort the shelf and lists - set the state

componentRecievesProps = (props) => {
  this.props = props;
  let updatedList = BooksUtility.mergeShelfSearch(this.props.selectedBooks, this.state.books);
  updatedList = BooksUtility.sortAllBooks(updatedList);
  this.setSate({books: updatedList});
}


  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/')>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            onChange={(e)=>this.newQuery(e.target.value)}
            value={this.state.query.value}/>
          </div>
        </div>
        <div className="search-books-results">
        //Results on the based on errors etc.
        {this.state.error && (
          <div className = "search-error">Sorry, there has been an issue with your search. Please search again.</div>)}

        //Provides number of books yielded by query if no error
        {!this.state.error && (
          <span className ='search-count'>
            {this.state.books.length}&nbsp; meet your search requirements.
          </span>
          )}


          <ol className="books-grid">
            // render books
            {this.state.books && this
              .state.books.map(book =>
                (<li key={book.id}>
                    <Book
                    book={book}
                    onSwitchShelf={this.props.onSwitchShelf}/>
                    // onUpdateQuickView={this.updateQuick}
                  </li>
                  ))}
          </ol>
        </div>
      </div>
   )
  }
}
