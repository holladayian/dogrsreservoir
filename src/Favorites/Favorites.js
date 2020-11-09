import React from 'react';

export const Favorites = (props) => {


  const showDogs = () => {
    console.log(props.savedDogs)
    return props.savedDogs.map((dog, i) => {
      return <img src={dog} className="dog-image"></img>
    })
  }

  return (
    <div>
      {showDogs()}
    </div>
  )
}