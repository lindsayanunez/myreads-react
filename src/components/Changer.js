import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'

class Changer extends Component{
  state = {
    shelfSelection: this.props.book.shelf || "none"
  }



  render(){
    return(
      <div className="book-shelf-changer">
        <select>
        //value
        //event listener
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Changer;
