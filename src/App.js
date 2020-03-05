import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon'
import Card from './components/Card'
import Header from './components/Header'


function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prev, setPrev] = useState('');
  const [loading, setLoading] = useState(true);
  const intialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {

    async function fetchData() {
      let response = await getAllPokemon(intialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrev(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);

    }

    fetchData();
  }, []);


  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrev(data.previous);
    setLoading(false);

  }

  const previous = async () => {
    if (!prev) return;
    setLoading(true);
    let data = await getAllPokemon(prev);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrev(data.previous);
    setLoading(false);

  }


  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemom => {
      let pokemonRecord = await getPokemon(pokemom.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }

  return (

    <div>
      {
        loading ? <h1 className="load">Loading...</h1> :
          (
            <>

              <Header />

              <div className="container mt-2">
                <button className="mb-2 btn btn-danger mr-2" onClick={previous}>Previous</button>
                <button className="mb-2 btn btn-danger" onClick={next}>Next</button>
              </div>

              <div className="container">
                <div className="row">
                  {pokemonData.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon} />
                  })}
                </div>
              </div>
              <div className="container mt-2 mb-2">
                <button className="btn btn-danger mr-2" onClick={previous}>Previous</button>
                <button className="btn btn-danger" onClick={next}>Next</button>

              </div>
            </>
          )
      }

    </div>

  );
}

export default App;
