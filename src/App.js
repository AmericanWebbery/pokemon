import React from "react";
import "./App.css";

import pokemonImage from "./images/pokemon.png";

function App() {
  return (
    <div className='App'>
      <img src={pokemonImage} alt='Pokemon Logo' className='pokemonLogo' />
    </div>
  );
}

export default App;
