import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'

class Changer extends Component{
  state = {
    shelfSelection: this.props.book.shelf || "none"
  };

onSwitchShelf = (book, shelf) => {
  //Changes the state for the change of shelf and sends call back.
  this.setState({
    shelfSelection: shelf});
  this.props.onSwitchShelf(book,shelf);
};

componentWillRecieveProps = props => {
  this.props = props;
  this.setState({
    shelfSelection: this.props.book.shelf
  });
};

  render(){
    return(
      <div className="book-shelf-changer">
        <select
          value={this.state.shelfSelection}
          onChange={e => this.onSwitchShelf(this.props.book, e.target.value)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Changer;
