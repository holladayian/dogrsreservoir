import React, { Component } from 'react';
import { HomePage } from './HomePage/HomePage.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  retrieveFakeYou = () => {
    this.retrieveRandomImage();
    this.retrieveRandomInfo();
  }

  retrieveRandomImage = () => {
    // make a fetch call here
    console.log('retrieveRandomImage')
  }

  retrieveRandomInfo = () => {
    // make fetch call here
    console.log('retrieveRandomInfo')
  }

  render() {
    return (
      <div className="fakeYous">
        <header className="App-header">
          <h1>FakeYous</h1>
          <button className="favorites">Favorites</button>
        </header>
        <HomePage 
        retrieveFakeYou={this.retrieveFakeYou}
        />
      </div>
    );
  }
}

export default App;
