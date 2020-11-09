import React from 'react';
import './Favorites.css';

export const Favorites = (props) => {


  const showDogs = () => {
    return props.savedDogs.map((dog, i) => {
      return <img src={dog} className="dog-image" key={i} data-testid={`test ${i}`}></img>
    })
  }

  return (
    <div className="favorites" data-testid='favorites'>
      {showDogs()}
    </div>
  )
}