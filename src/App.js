import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="fakeYous">
        <header className="App-header">
          <h1>FakeYous</h1>
          <button className="favorites">Favorites</button>
        </header>
      </div>
    );
  }
}

export default App;
