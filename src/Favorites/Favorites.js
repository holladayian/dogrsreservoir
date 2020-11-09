import React from 'react';

export const Favorites = (props) => {


  const showDogs = () => {
    return props.savedDogs.map((dog, i) => {
      return <img src={dog} className="dog-image" key={i}></img>
    })
  }

  return (
    <div>
      {showDogs()}
    </div>
  )
}