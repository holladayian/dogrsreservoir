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

  render() {
    return (
      <div className="homepage">
        <button className="random" onClick={this.props.retrieveFakeYou}>random</button>
        <button className="save">save</button>
      </div>
    )
  }
}

HomePage.propTypes = {
  retrieveFakeYou: propTypes.func

}