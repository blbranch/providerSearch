import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

let npis = []

axios.get('https://npiregistry.cms.hhs.gov/api/?', {
    params: {
        version: 2.1,
        city: 'jacksonville',
        state: 'FL',
        last_name: 'Rust',
        pretty: true
    }
}).then(resp => {
    data = resp.data.results
    for (let i = 0; i < data.length; i++) {
        npis.push(data[i].number)
    }
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
     
      </header>
    </div>
  );
}

export default App;
