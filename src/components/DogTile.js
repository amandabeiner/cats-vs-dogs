import React from 'react';

const DogTile = props => {
  return(
    <div>
      <h2>{props.dog.name}</h2>
      <h4>{props.dog.breed}</h4>
      <img src={`${props.dog.image}`} />
    </div>
  )
}

export default DogTile;
