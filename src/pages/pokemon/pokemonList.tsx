import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
// import { useGetPokemonList } from '../../hooks';

const getPokemonList = async (limit: number, offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.results || [];
};

const PokemonList = () => {
  const [limit, setLimit] = useState(2);
  const [offset, setOffset] = useState(0);

  const {
    data: pokemonList,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pokemonList', limit, offset],
    queryFn: () => getPokemonList(limit, offset),
  });

  if (isLoading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
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
      <button
        onClick={() => setOffset((prev) => prev + limit)}
        disabled={offset + limit >= 1000}
      >
        Next
      </button>
      <button onClick={() => setOffset(offset - limit)} disabled={offset === 0}>
        Previous
      </button>
    </div>
  );
};

export default PokemonList;
