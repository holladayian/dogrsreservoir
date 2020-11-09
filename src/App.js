import React, { Component } from 'react';
import { HomePage } from './HomePage/HomePage.js';
import { getNewDog } from './apiCalls/dogcalls.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  // retrieveFakeYou = () => {
  //   this.retrieveRandomImage();
  //   this.retrieveRandomInfo();
  // }

  // retrieveRandomImage = () => {
  //   // make a fetch call here
  //   console.log('retrieveRandomImage')
  // }

  retrieveNewDog = async() => {
    // make fetch call here
    const newDog = await getNewDog()
    console.log('newDog', newDog)
    
  }

  render() {
    return (
      <div className="dogsResivour">
        <header className="App-header">
          <h1>Dog Resivour</h1>
          <button className="favorites">Favorites</button>
        </header>
        <HomePage 
        retrieveFakeYou={this.retrieveNewDog}
        />
      </div>
    );
  }
}

export default App;
