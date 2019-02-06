import React from "react";
import SearchInput from "./input";
//import BooksContainer from "../Books/BooksContainer";

import { callGoogleBooks } from "../../APIs/google_api";
import Multi_Books from "../Book/Multi_books";

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "", 
            field: "intitle", 
            data: [], 
            loading: false, 
            error: ""
        };
      }
    async loadData() {
     this.setState({ loading: true, data: [], error: "" });
     console.log('loadData', this.state.query, this.state.field)
     try {
       const response = await callGoogleBooks(
        this.state.query,
        this.state.field
      );
      console.log('response', response)
      
      if (response.data) {
        
        const data = response.data
          .map(book => {
            const volumeID = book.id;
            const identifiers = book.volumeInfo.industryIdentifiers || [];
            const title = book.volumeInfo.title || "";
            const subtitle = book.volumeInfo.subtitle || "";
            const authors = book.volumeInfo.authors || [];
            const description = book.volumeInfo.description || "";
            const pageCount = book.volumeInfo.pageCount || null;
            const hasThumbnail = book.volumeInfo.imageLinks || null;
            const amount  = book.volumeInfo.saleInfo && book.volumeInfo.saleInfo.retailPrice.amount || null;
            const currency_code = book.volumeInfo.saleInfo && book.volumeInfo.saleInfo.retailPrice.currencyCode || "";
            let thumbnailLink;
            hasThumbnail
              ? (thumbnailLink = book.volumeInfo.imageLinks.thumbnail.replace(
                  /^http:\/\//i,
                  "https://"
                ))
              : (thumbnailLink = "");
            return {
              volumeID,
              identifiers,
              title,
              subtitle,
              authors,
              description,
              pageCount,
              thumbnailLink,
              amount,
              currency_code
            };
          }).filter(
            book =>
              book.thumbnailLink !== "" &&
              book.authors.length !== 0 &&
              book.title.length !== 0
          );
        data.length? this.setState({
              data,
              loading: false
            }): this.setState({
              loading: false,
              error: "🙅 No matches! 🙅"
            });
      console.log('data', data)

      } else {
        this.setState({
          loading: false,
          error: "🙅 No matches! 🙅"
        });
      }
    } catch (e) {
      console.log('error', e)
      this.setState({
        loading: false,
        error: "There was an error connecting to Google Books."
      });
    }
  };

  onQueryChange (e) {
    
    const query = e.target.value;
    this.setState({ 
      query:query,
       error: "" 
      })
      console.log(query)
    //this.setState({ query, error: "" });
  };

  onFieldChange(e) {
    const field = e.target.value;
    this.setState({ field, error: "" });
    console.log(field)
  };

  submitForm (e)  {
    e.preventDefault();
    this.loadData();
  };
  

  render() {
    return (
      <section className="search">
        <SearchInput
          query={this.state.query}
          field={this.state.field}
          onQueryChange={this.onQueryChange.bind(this)}
          onFieldChange={this.onFieldChange.bind(this)}
          submitForm={this.submitForm.bind(this)}
        />
        <Multi_Books books={this.state.data} loading={this.state.loading} error={this.state.error} perPage={10} stacked forSearch />
        {/* {JSON.stringify(this.state.data)} */}
      </section>
      
    );
  }
}

export default  BookSearch ;