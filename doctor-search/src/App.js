import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm.js'
//import ProviderApi from './components/API/Api'

class App extends Component {

render() {

  return (
    <div>
      <h1>Search Form</h1>
      <div><SearchForm/></div>
      {/* <div><ProviderApi/></div>  */}
   </div>
    )
  }
}

export default App;
