import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from './Book';

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
                onSwitchShelf={this.props.onSwitchShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;

// Resources Used
// Starter Code from Udacity Front-End Nanodegree - https://github.com/udacity/reactnd-project-myreads-starter)
// Doug Brown's Video Tutorial Part 1 - https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)

