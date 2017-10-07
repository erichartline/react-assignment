import React, { Component } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem />
      </div>
    );
  }
}

export default App;
