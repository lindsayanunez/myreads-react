export const sortAllBooks = (list) =>{
  //Take in, sort and return the list of books
  const newList = list.sort(function(a ,b){

    const titleA = a
    .title
    .toUpperCase();

    const titleB = b
    .title
    .toUpperCase();

    if(titleA < titleB{
      return -1;}

    if (titleA > titleB){
      return 1;
    }

    return 0;
    })

    return newList;
  }

  export const mergeShelfSearch = (shelf, search) => {
    //Check all the books in the search results to see if already on the shelf
    const hashTable = {};
    shelf.forEach(book => hashTable[book.id] = book.shelf);

    search.forEach(book => {
      book.shelf = hashTable[book.id] || 'none';
    });

    return search;
  }