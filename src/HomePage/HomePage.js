import React, { Component } from 'react';
import propTypes from 'prop-types';
import './HomePage.css';

export class HomePage extends Component {

  setNewDog = async () => {
    await this.props.retrieveNewDog()
  }

  saveDog = (e) => {
    e.preventDefault()
    this.props.saveDog(this.props.currentDog)
  }

  render = () => {
    return (
      <div className="homepage" data-testid='homepage'>
          {this.props.currentDog ? <img src={this.props.currentDog} className="dog-image" data-testid='current-dog' alt='random-dog'></img> : ''}
        <div className='button-case'>
          <button className="random" onClick={this.setNewDog} data-testid='rand-btn'>random</button>
          {this.props.currentDog ? <button className="save" onClick={e => this.saveDog(e)} data-testid='save-btn'>favorite</button> : ''}
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  currentDog: propTypes.string,
  retrieveNewDog: propTypes.func,
  saveDog: propTypes.func
}