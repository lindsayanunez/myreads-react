import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf';

class BookCase extends Component{
  state ={

  }

  componentDidMount = () =>{
    //Updates list of allthe books
    this
    .props
    .onRefreshAllBooks();
  }

  updateShelves = () =>{
    //Updates state of the shelves to show the correct books.

    const newCurrentlyReading ={
      name: "Currently Reading",
      books: this
        .props
        .books
        .filter(book => book.shelf === "currentlyReading")

    };
    const newWantToRead ={
      name: "Want to Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === "wantToRead")

    };
    const newRead ={
      name: "Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === "read")
    };
  }

  render()
  //nullcheck to see
  //how many books you have it will update the shelves
  let shelves = [];
  if (this.props.books && this.props.books.length)
    shelves =this.updateShelves();

  return(
    <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              //map over theshelves with a null check to create as may cshelves as exist
              {shelves && shelves.map(shelf) => (
                <BookShelf
                key={shelf.name}
                shelf={shelf}/>)}

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>

    )
}
export default BookCase;

