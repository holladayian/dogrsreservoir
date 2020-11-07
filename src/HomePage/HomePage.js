import React, { Component } from 'react';
import propTypes from 'prop-types';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      image: '',
      name: ''
    }
  }

  setFakeYous = () => {
    this.props.retrieveFakeYou()
  }

  render = () => {
    return (
      <div className="homepage">
        <button className="random" onClick={this.setFakeYous}>random</button>
        <button className="save">save</button>
      </div>
    )
  }
}

HomePage.propTypes = {
  retrieveFakeYou: propTypes.func

}