import React, { Component } from 'react';
import OneVoteOneResult from './vote/OneVoteOneResult.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Vote">
        <OneVoteOneResult/>
      </div>
    );
  }
}

export default App;
