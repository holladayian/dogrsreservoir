import React, { Component } from 'react';
import propTypes from 'prop-types';
import './HomePage.css';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      newDogImg: ''
    }
  }

  setNewDog = async () => {
    const newDogImg = await this.props.retrieveNewDog()
    console.log(newDogImg)
    this.setState({ newDogImg })
  }

  render = () => {
    return (
      <div className="homepage">
        <img src={this.state.newDogImg} className="dog-image"></img>
        <button className="random" onClick={this.setNewDog}>random</button>
        <button className="save">save</button>
      </div>
    )
  }
}

HomePage.propTypes = {
  retrieveFakeYou: propTypes.func

}