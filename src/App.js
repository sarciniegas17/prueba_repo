import useConsulta from "./hooks/useConsulta";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const { fetchCharacters } = useConsulta();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };

    fetchData();
  }, [fetchCharacters]);

  return (
    <div className="App">
      <h1>Personajes de Rick and Morty</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
