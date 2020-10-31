import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm.js'

class App extends Component {

render() {

  return (
    <div>
      <h1>Search Form</h1>
      <SearchForm/>
    </div>
    )
  }
}

export default App;
