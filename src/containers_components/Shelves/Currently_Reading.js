import React from "react";
import { connect } from "react-redux";
import Multi_Books from '../Book/Multi_books'

const CurrentlyReading = ({ books }) =>
{
    return (
        <Multi_Books
          books={books}
          shelf={"Currently Reading"}
          perPage={3}
        />
      );
}
  


const mapStateToProps = state  => ({
    //books: state.books.filter(book => book.shelfStatus === "Currently Reading")
  });
  
  export default connect(mapStateToProps)(CurrentlyReading);