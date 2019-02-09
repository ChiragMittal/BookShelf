import React from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Book from "./Single_book";
import Loader from 'react-loaders'


class Multi_Books extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page:1
          };
    }

    divideBooks(books){
        
        const indexLast = this.state.page * this.props.perPage;
        const indexFirst = indexLast - this.props.perPage;
        return books.slice(indexFirst, indexLast);
    };
    dropBooks(){
        const { books, loading, forSearch } = this.props;
        if (books.length) {
            console.log(books.length)
        return this.divideBooks(books).map(book => (
        <Book key={book.volumeID} book={book} forSearch={forSearch} />
              ));
            } 
        else if (loading) {
            return (<Loader type="ball-scale-multiple" />);
                } 
        else if (forSearch) {
            return;
            } 
        else {
            return (
            <div className="no-books">
            <p>No books on the shelf 😔</p>
            <Link to="/search">Find Book</Link>
            </div>
                );
            }
    };

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({page: pageNumber});
      };

      render() {
        const { shelf, stacked, forSearch,books } = this.props;
        return (
          <div className={forSearch?"books_stacked":"books_not_stacked"}>
            {this.state.page && (
                <div className={stacked ? "books_layout_stacked" : "books_layout"}>
                    {shelf && 
                    (stacked ? (
                        <Link
                          to={`/${shelf.replace(/\s+/g, "-").toLowerCase()}`}
                          className="books__heading"
                        >
                          {shelf}
                        </Link>
                      ) : (
                        <span className="books__heading">{shelf}</span>
                      ))}
                <div>
                {stacked && <div className="books_wrap">{this.dropBooks()}</div>}
                {!stacked && this.dropBooks()}
                {this.divideBooks(books).length ? 
                <div>
                { <Pagination
                  activePage={this.state.page}
                  itemsCountPerPage={this.props.perPage}
                  totalItemsCount={this.props.books.length}
                  onChange={this.handlePageChange.bind(this)}
                />}
                </div>  :
                <div></div>
            }
                                  
                                  </div>  
                </div>
            )}
           
            
          </div>
           
        );
        
      }
}


export default  Multi_Books ;