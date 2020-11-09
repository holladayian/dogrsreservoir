import React, { Component } from 'react';
import { HomePage } from './HomePage/HomePage.js';
import { Favorites } from './Favorites/Favorites.js';
import { getNewDog } from './apiCalls/dogcalls.js';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDog: '',
      savedDogs: [],
      favoritesView: false
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

  changeButton = () => {
    this.setState( {favoritesView: !this.state.favoritesView} )
  }

  render= () => {
    return (
      <div className="dogsResivour">
        <header className="App-header">
          <h1>Dog Resivour</h1>
          {this.state.favoritesView ? 
          <Link to='/favorites' className="favorites" onClick={() => this.changeButton()}>Favorites</Link> :
          <Link to='/' className="homepage" onClick={() => this.changeButton()}>Home</Link>}
        </header>
        <Switch>
          <Route
            exact path='/'
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
                <Favorites 
                savedDogs={this.state.savedDogs}
                />
              )
            }}
          />
          <Route
            exact path='*'
            render={() => {
              return (
                <div>hmm, this isn't the correct url</div>
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
