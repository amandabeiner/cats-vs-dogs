import React from 'react';
import DogSection from './DogSection';
import CatSection from './CatSection';

const App = props => {
  return(
    <div>
      <h1>Floofs of Launch</h1>
      <DogSection
      dogs={props.animals.dogs}
      />
      <CatSection
        cats={props.animals.cats}
      />
    </div>
  )
}

export default App;
