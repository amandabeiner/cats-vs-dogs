import React from 'react';

const CatTile = props => {

  let catClick = event => {
    props.catHandler(props.cat.name)
  }

  return(
    <div className="columns small-4" onClick={catClick}>
      <h4>{props.cat.name}</h4>
      <p>personality: {props.cat.personality}</p>
      <p>human: {props.cat.human}</p>
      <img src={`${props.cat.image}`} />
    </div>
  )
}

export default CatTile;
