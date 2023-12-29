interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
}

const useConsulta = () => {
  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("No se pudo obtener la información");
      }
      const data = await response.json();
      const extractedCharacters: Character[] = data.results.map(
        (character: any) => ({
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
        })
      );

      return extractedCharacters;
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  };
  return { fetchCharacters };
};

export default useConsulta;
