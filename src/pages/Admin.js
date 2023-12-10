import React,{ Component }  from "react";
import { booksList } from "../components/books";

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookName: '',
            isbn: '',
            category: '',
            rowNo: '',
            bookCount: '',
            cost: '',
            availability: '',
        }
    }


    onNameChange = (event) => {
        console.log(event.target.value);
        this.setState({bookName: event.target.value});
    }
    onIsbnChange = (event) => {
        console.log(event.target.value);
        this.setState({isbn: event.target.value});
    }
    onCatChange = (event) => {
        console.log(event.target.value);
        this.setState({category: event.target.value});
    }
    onRowChange = (event) => {
        console.log(event.target.value);
        this.setState({rowNo: event.target.value});
    }
    onCountChange = (event) => {
        console.log(event.target.value);
        this.setState({bookCount: event.target.value});
    }
    onCostChange = (event) => {
        console.log(event.target.value);
        this.setState({cost: event.target.value});
    }
    onAvailChange = (event) => {
        console.log(event.target.value);
        this.setState({availability: event.target.value});
    }

    onAddBook = () => {
        // Destructure the state values
        const { bookName, isbn, category, rowNo, bookCount, cost, availability } = this.state;
        console.log(bookName, isbn, category, rowNo, bookCount, cost, availability);
        // Validate the required fields
        if (!bookName || !isbn || !category || !rowNo || !bookCount || !cost || !availability) {
          console.log('Please fill in all fields.');
          return;
        }
      
        // Create a new book object
        const newBook = {
          id: Math.random().toString(36).substr(2, 9), // Generate a unique ID (replace with a more robust solution)
          bookName,
          isbn,
          category,
          rowNo,
          bookCount,
          cost,
          availability,
        };
      
        // Update the books list (replace this with your state management logic or API call)
        booksList.push(newBook);
      
        // Log the new book (replace this with your state management logic or API call)
        console.log('Added new book:', newBook);
      
        // Clear the form after adding a book
        this.setState({
          bookName: '',
          isbn: '',
          category: '',
          rowNo: '',
          bookCount: '',
          cost: '',
          availability: '',
        });
      }
      

    render(){
        return (
            <article className="br3 ba b--black-30 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Add New Book</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input
                            onChange={this.onNameChange} 
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="isbn">ISBN</label>
                        <input 
                            onChange={this.onIsbnChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="isbn"  
                            id="isbn"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="category">Category</label>
                        <input 
                            onChange={this.onCatChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="category"  
                            id="category"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="row">Row No</label>
                        <input 
                            onChange={this.onRowChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="row"  
                            id="row"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="count">Count</label>
                        <input 
                            onChange={this.onCountChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="count"  
                            id="count"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="cost">Cost</label>
                        <input 
                            onChange={this.onCostChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number"
                            min = {0} 
                            name="cost"  
                            id="cost"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="avail">Availability</label>
                        <input 
                            onChange={this.onAvailChange}
                            className="pa2 ba b--black input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" 
                            min={0}
                            name="avail"  
                            id="avail"/>
                    </div>
                    
                    
                    
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={this.onAddBook}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p 
                        onClick={() => this.props.onRouteChange('admin')}
                        className="f6 link dim black db pointer">Cancel</p>
                    </div>
                </div>
                </main>
    
    
            </article>
        );
    }   
}

export default Admin;