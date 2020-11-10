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
      favoritesView: false,
      errorMessage: '',
      errorStatus: ''
    }
  }

  componentDidMount() {
    this.setState({ 
      currentDog: '',
      savedDogs: [],
      favoritesView: false,
      errorMessage: '',
      errorStatus: ''
    })
  }

  retrieveNewDog = async() => { 
    try {
    const newDog = await getNewDog();
    this.setState({ currentDog: newDog, errorMessage: '', errorStatus: '' })
    return newDog
    } catch(error) {
      console.log(error)
      this.setState({ errorMessage: error.message, errorStatus: error.status })
    }
  }

  saveDog = (newDog) => {
    if (!this.state.savedDogs.includes(newDog)) {
      this.state.savedDogs.push(newDog)
    } else {
      alert('you\'ve already favorited this pup!')
    }
  }

  changeButton = () => {
    this.setState( {favoritesView: !this.state.favoritesView} )
  }

  render = () => {
    if(this.state.errorStatus) {
      return (
        <div>Error {this.state.errorStatus}, {this.state.errorMessage}</div>
      )
    }
    return (
      <div className="dogsReservoir" data-testid="dogs-reservoir">
        <header className="App-header" data-testid='app-header'>
          <h1>Dog Resivour</h1>
          {!this.state.favoritesView ? 
            <Link 
              to='/favorites' 
              className='link' 
              onClick={() => this.changeButton()} 
              data-testid='fav-btn'
            >
              Favorites
            </Link> :
            <Link 
              to='/' 
              className='link' 
              onClick={() => this.changeButton()} 
              data-testid='home-btn'
            >
              Home
            </Link>
          }
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
                <div data-testid='error'>hmm, this isn't the correct url</div>
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
