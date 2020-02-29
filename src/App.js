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
  };

  useEffect(() => {
    pokeLookup();
  }, []);

  return (
    <div className='App'>
      <img src={pokemonImage} alt='Pokemon Logo' className='pokemonLogo' />
      <p className='results-chars'>
        {result.map((x, i) => (
          <span key={x.name} title={x.name} className='chars'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i +
                1}.png`}
              alt={x.name}
            />
            <br />
            {x.name}
          </span>
        ))}
      </p>
      <p className='results-number'>0 - 20 of {theCount} results</p>
    </div>
  );
}

export default App;
