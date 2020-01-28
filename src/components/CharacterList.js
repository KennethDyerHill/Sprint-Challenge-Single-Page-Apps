import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import SearchForm from './SearchForm.js';

let key = 1;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  const fetchApi = () => {
    axios(url)
      .then(response => {
        setCharacters(response.data.results)
      })
  }

  useEffect(() => {
    fetchApi();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const handleSubmit = (name) => {
    setCharacters(characters.filter(character => {
      console.log(character)
      let r = '.*' + name + '.*';
      let regex = new RegExp(r);

      return regex.test(character.name)
    }))
  }

  return (
    <section className="character-list">
      <SearchForm onSubmit={handleSubmit} />
      <h2>{characters.map(character => {
        key++;
        return <CharacterCard name={character.name} gender={character.gender} key={key} url={character.url} />
      })}</h2>
    </section>
  );
}
