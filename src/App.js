import React, { Component } from 'react';
<<<<<<< HEAD
import { HomePage } from './HomePage/HomePage.js';
import { getNewDog } from './apiCalls/dogcalls.js';
=======
>>>>>>> 52c8663cdeec0a801841e618efccf5f30935f326
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
    const newDog = await getNewDog()
    return newDog.message
    
  }

  render() {
    return (
      <div className="dogsResivour">
        <header className="App-header">
          <h1>Dog Resivour</h1>
          <button className="favorites">Favorites</button>
        </header>
        <HomePage 
        retrieveNewDog={this.retrieveNewDog}
        />
      </div>
    );
  }
}

export default App;
