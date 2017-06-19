import React from 'react';
import DogSection from './DogSection';
import CatSection from './CatSection';

const App = props => {
  debugger;
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

export default App;
