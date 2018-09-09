import React, { Component } from 'react';
import './App.css';
import Player from './Player'
import Header from './Header'
import List from './List'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Player />
        <List />
      </div>
    );
  }
}

export default App;
