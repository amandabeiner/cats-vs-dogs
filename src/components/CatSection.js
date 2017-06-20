import React from 'react';
import CatTile from './CatTile';

const CatSection = props => {

  let catHandler = (catName) => {
    alert(catName + ' says Meow!')
  }

  let cats = props.cats.map(cat => {
    return(
      <CatTile
        cat={cat}
        catHandler={catHandler}
        key={cat.id}
      />
    )
  })
  return(
    <div className="row">
      <h3>Cats</h3>
      {cats}
    </div>
  )
}

export default CatSection;
