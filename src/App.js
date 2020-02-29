import React, { useState, useEffect } from "react";
import "./App.css";

import pokemonImage from "./images/pokemon.png";

function App() {
  const [theCount, setTheCount] = useState("");
  const [result, setResult] = useState([]);

  const pokeLookup = async () => {
    let res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    );
    let pokemon = await res.json();
    setTheCount(pokemon.count);
    setResult(pokemon.results);
    console.log(pokemon);
  };

  useEffect(() => {
    pokeLookup();
  }, []);

  return (
    <div className='App'>
      <img src={pokemonImage} alt='Pokemon Logo' className='pokemonLogo' />
      <p className='results-chars'>
        {result.map(x => (
          <span key={x.name} className='chars'>
            {x.name}
          </span>
        ))}
      </p>
      <p className='results-number'>0 - 20 of {theCount} Results</p>
    </div>
  );
}

export default App;
