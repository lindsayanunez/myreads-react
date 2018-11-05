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

  render()
  return(
    <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>

    )
}
export default BookCase;

