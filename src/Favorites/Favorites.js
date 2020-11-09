import React from 'react';

export const Favorites = (props) => {


  const showDogs = () => {
    console.log(props.savedDogs)
    props.savedDogs.map((dog, i) => {
      <img src={dog} className="dog-image"></img>
    })
  }

  return (
    <div>
      {showDogs()}
    </div>
  )
}