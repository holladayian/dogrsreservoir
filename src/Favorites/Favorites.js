import React from 'react';

export const Favorites = () => {


  showDogs = () => {
    this.props.savedDogs.map((dog, i) => {
      <img src={this.props.currentDog} className="dog-image"></img>
    })
  }
  return (
    this.showDogs()
  )
}