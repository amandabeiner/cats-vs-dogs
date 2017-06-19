import React from 'react';
import DogSection from './DogSection';
import CatSection from './CatSection';
const AnimalsSection = props => {
  return(
    <div>
      <DogSection
      dogs={props.animals.dogs}
      />
      <CatSection
        cats={props.animals.cats}
      />
    </div>
  )
}

export default AnimalsSection;
