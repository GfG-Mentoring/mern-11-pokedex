import { useEffect, useState } from 'react';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([]);

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  function getPokemonList() {
    setIsError(false);
    setIsLoading(true);

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data?.results || []);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {pokemonList.map((pokemon) => (
        <a key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
          {pokemon.name}
        </a>
      ))}
    </div>
  );
};

export default PokemonList;
