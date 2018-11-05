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