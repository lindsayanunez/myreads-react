import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Changer from './components/Changer';

class Book extends Component{
  state ={
    shelfSelection: this.props.book.shelf || 'none'

  }
  render (){
    //If there is more than one author in the array join them to one string
    const authors = this.props.book.authors && this
      .props.book.authors.join(' | ');

    //Create the thumbnail URL
     let url = {this.props.book.imageLinks
      && `url(${this.props.book.imageLinks.thumbnail})`;

    return(
        <div className="book">
          <div className="book-top">
          <button className="book-cover-button">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: url
              }}></div>
          </button>

            <Changer
            book={this.props.book}
            onswitchShelf={this.props.onSwitchShelf}/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
    )
  }
}

export default Book;



