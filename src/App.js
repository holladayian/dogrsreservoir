import React, { Component } from 'react';
import { HomePage } from './HomePage/HomePage.js';
import { getNewDog } from './apiCalls/dogcalls.js';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDog: '',
      savedDogs: []
    }
  }

  componentDidMount() {

  }

  retrieveNewDog = async() => {
    const newDog = await getNewDog();
    this.setState({ currentDog: newDog.message })
    return newDog.message
  }

  saveDog = () => {
    this.state.savedDogs.push(this.state.currentDog)
    console.log(this.state.savedDogs)
  }

  render() {
    return (
      <div className="dogsResivour">
        <header className="App-header">
          <h1>Dog Resivour</h1>
          <button className="favorites">Favorites</button>
        </header>
        <Switch>
          <Route
            exact path='/homepage'
            render={() => {
              return (
                <HomePage 
                retrieveNewDog={this.retrieveNewDog}
                currentDog={this.state.currentDog}
                saveDog={this.saveDog}
                />
              )
            }}
          />
          <Route
            exact path='/favorites'
            render={() => {
              return (
                <div>favorites</div>
              )
            }}
          />
          <Route
            exact path='*'
            render={() => {
              return (
                <div>hmm, this isn't a proper url</div>
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
