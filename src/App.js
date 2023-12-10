// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Admin from './pages/Admin';
import AdminList from './pages/AdminList';
import BookList from './pages/BookList';
import QRScan from './pages/QRScan';
import BookDetails from './pages/BookDetails';

const initalState = {
  route: 'Home',
  book:undefined
};

class App extends Component{
  constructor(){
    super();
    this.state = initalState;
  }

  onRouteChange = (rt) => {
    this.setState({route: rt});
  }

  onBookSelect = (b) => {
    console.log(b, ' book detail')
    this.setState({route: 'BookDetail', book: b});
  } 

  render(){
    const {route} = this.state;
    return(
      <div className='App'>
        <Navigation onRouteChange={this.onRouteChange} onBookSelect={this.onBookSelect} />
        {
          route === "admin"?
          <Admin/>
          :
          route === "admin-List"?
          <AdminList/>
          :
          route === "Book-list"?
          <BookList onBookSelect={this.onBookSelect}/>
          :
          route === "qr-scan"?
          <QRScan/>
          :
          route === "BookDetail"?
          <BookDetails book={this.state.book}/>
          :
          <BookList/>
        }
      </div>
    );
  }
}

export default App;
