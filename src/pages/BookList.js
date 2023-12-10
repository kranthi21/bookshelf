import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {booksList} from '../components/books';

class BookList extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        this.setState({books: booksList.slice()});
    }

    onSearchChange = (event) =>{
        console.log(event.target.value);
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filterdBooks = this.state.books.filter( (book)=>{
            return book.bookName.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className="list-books">
                <h1 className="f1">BookShelf</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList books = {filterdBooks}   onBookSelect={this.onBookSelect}/>
                    </ErrorBoundary>
                </Scroll> 
            </div>
        );
    }


}


export default BookList;