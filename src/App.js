import React from 'react'
import * as BooksAPI from './BooksAPI'
import * as BookUtility from './BookUtility'
import './App.css'
import BookCase from './components/BookCase';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount = () =>{
    if(this.state.newBook){
      this.refreshAllBooks();
    }
  }

  refreshAllBooks = () => {
    //takes books on shelf and updates with sorted list.
    BooksAPI
    .getAll()
    .then((list) =>{
      this.setState({
        books: BookUtility.sortAllBooks(list),
        newBook: false
      });
    });
  }

  switchShelf =(book, shelf) =>{
    BooksAPI
    .update(book, shelf)
    .then(respond => {
      //update the book state, looks at list of books first
      let updatedList = this
      .state.books.slice(0);

      //Check list for the book
      const books = updatedList.filter( listbook => listBook.id === book.id)
        if (books.length){
          //Update books that are already on the shelf
          books[0].shelf = shelf;
        }else {
          //sort list of books and add to the shelf
          updatedList.push(book);
          updatedList = BookUtility.sortAllBooks(newList);
        }
        //update the state
        this.setState({books: updatedList});
    })
  }

  render() {
    return (
      <BookCase
        books={this.state.books}
        onRefreshAllBooks ={this.refreshAllBooks}
        onswitchShelf={this.switchShelf} />
    )
  }
}

export default BooksApp
