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
      <div className="homepage">
          {this.props.currentDog ? <img src={this.props.currentDog} className="dog-image"></img> : ''}
        <div className='button-case'>
          <button className="random" onClick={this.setNewDog}>random</button>
          <button className="save" onClick={e => this.saveDog(e)}>favorite</button>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  retrieveFakeYou: propTypes.func

}