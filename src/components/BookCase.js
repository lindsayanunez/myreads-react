import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class BookCase extends Component {
  state = {};

  componentDidMount = () =>{
    //Updates list of allthe books
    this.props.onRefreshAllBooks();
  };

  updateShelfStatus = () =>{
    //Updates state of the shelves to show the correct books.

    const newCurrentlyReading = {
      name: "Currently Reading",
      books: this.props.books.filter(book => book.shelf === "currentlyReading")
    };
    const newWantToRead ={
      name: "Want to Read",
      books: this.props.books.filter(book => book.shelf === "wantToRead")
    };
    const newRead ={
      name: "Read",
      books: this.props.books.filter(book => book.shelf === "read")
    };
    return [newCurrentlyReading, newWantToRead, newRead];
  };

  render(){
  //nullcheck to see
  //how many books you have it will update the shelves
  let shelves = [];
  if (this.props.books && this.props.books.length)
    shelves = this.updateShelfStatus();

  return(
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves &&
              shelves.map(shelf => (
              <BookShelf
              key={shelf.name}
              shelf={shelf}
              onSwitchShelf={this.props.onSwitchShelf} />))}
            </div>
            </div>
          <div className="open-search">
            <Link to='/search'>Add a Book</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default BookCase;

// Resources Used
// Starter Code from Udacity Front-End Nanodegree - https://github.com/udacity/reactnd-project-myreads-starter)
// Doug Brown's Video Tutorial Part 1 - https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)

