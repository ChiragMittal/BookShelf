import React from "react";
 import   {Modal}  from "react-bootstrap";
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';
import { connect } from "react-redux";

//Modal.setAppElement("#root");
class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            shelf: this.props.book.shelfStatus ? this.props.book.shelfStatus : "Want to Read"
          };
    }

    handleOpenModal(e) {
        e.stopPropagation();
        this.setState({ showModal: true });
      };
      handleCloseModal (e) {
        e.stopPropagation();
        this.setState({ showModal: false });
      };

      render(){
        const { forSearch } = this.props;
        const {
          thumbnailLink,
          identifiers,
          title,
          subtitle,
          authors,
          pageCount,
          description,
          amount,
          currency_code
        } = this.props.book;
        return (
        <div className="books">
            <a onClick={this.handleOpenModal.bind(this)}>
                 <img className="book_cover" src={thumbnailLink} />
            </a>
           
            <Modal  onRequestClose={this.handleCloseModal.bind(this)} className="book-modal">
            
            <Modal.Body>
             <h1>Hello World</h1>
             
             </Modal.Body>
             
                    {/* <a className="modal_close" onClick={this.handleCloseModal.bind(this)}>
                        <i className="remove"  ><Glyphicon glyph="remove" /></i>
                    </a>

                    <div className="modal_view">
                        { <img className="modal_book_cover"src={thumbnailLink} />}
                        <div className="modal_book_info">
                            <div>
                               
                                <p>{title}</p>
                                <p>{subtitle}</p>
                                {<Glyphicon glyph="book" /> }
                            </div> */}
                            {/* <i className="author"  ><Glyphicon glyph="user" /></i>
                            <p>{authors ? authors.join(", ") : "No author information."}</p>
                            <i className="pages"  ><Glyphicon glyph="file" /></i>
                            <p>{pageCount ? `${pageCount} pages` : "No page information."}</p>
                            <i className="isbn"  ><Glyphicon glyph="tasks" /></i>
                            <p>
                                {identifiers.length
                                ? identifiers[0].identifier
                                : "No ISBN or other identifying information."}
                            </p>
                            <i className="currency"  ><Glyphicon glyph="usd" /></i>
                            <p>{currency_code}</p>
                            <p>{amount}</p> */}
                        {/* </div> */}
                            {/* <p className="book-modal__book-description">
                                    {description.length > 400? description.slice(0, 400) + " ...": description}
                            </p>
                            <select className="book-modal__select" value={this.state.shelf} >
                                <option value="Read">Read</option>
                                <option value="Want to Read">Want to Read</option>
                                <option value="Currently Reading">Currently Reading</option>
                            </select> */}
                            {/* {forSearch ? (
                            <a className="book-modal__submit" >
                                <i className="done"  ><Glyphicon glyph="ok" /></i>
                            </a>
                            ) : (
                            <a className="book-modal__delete" >
                                <i className="delete"  ><Glyphicon glyph="trash" /></i>
                            </a>
                            )} */}
                    {/* </div> */}
             
                    
            </Modal>
        </div>
        )
        
      }
    
};

export default Book;