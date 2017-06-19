import React from 'react';

const CatTile = props => {
  return(
    <div>
      <h2>{props.cat.name}</h2>
      <h4>{props.cat.breed}</h4>
      <img src={`${props.cat.image}`} />
    </div>
  )
}

export default CatTile;
