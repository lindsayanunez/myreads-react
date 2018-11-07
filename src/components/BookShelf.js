import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from './components/Book';

class BookShelf extends Component{
  state = {
  }

  render(){


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this
            .props
            .shelf
            .books
            .map(book =>(
              <li key={book.id}>
              <Book
                book={book}
                onswitchShelf={this.props.onSwitchShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;

