import React, { Component } from 'react';
import propTypes from 'prop-types';
import './HomePage.css';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    
    // this.state = {
    //   newDogImg: ''
    // }
  }

  setNewDog = async () => {
    await this.props.retrieveNewDog()
    // const newDogImg = await this.props.retrieveNewDog()
    // console.log(newDogImg)
    // this.setState({ newDogImg })
  }

  saveDog = (e) => {
    e.preventDefault()
    this.props.saveDog(this.props.currentDog)
  }

  render = () => {
    return (
      <div className="homepage" data-testid='homepage'>
          {this.props.currentDog ? <img src={this.props.currentDog} className="dog-image" data-testid='current-dog'></img> : ''}
        <div className='button-case'>
          <button className="random" onClick={this.setNewDog} data-testid='rand-btn'>random</button>
          {this.props.currentDog ? <button className="save" onClick={e => this.saveDog(e)} data-testid='save-btn'>favorite</button> : ''}
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  retrieveFakeYou: propTypes.func

}