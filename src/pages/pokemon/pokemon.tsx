import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const PokemonDetail = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [selectedTab, setSelectedTab] = useState<string>('Abilites');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab') || 'Abilites';
    setSelectedTab(tab);
  }, [searchParams]);

  function getPokemon() {
    setIsLoading(true);
    setIsError(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
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
    getPokemon();
  }, [params.id]);

  const tabs = [
    {
      label: 'Abilites',
      content: <div>Abilites</div>,
    },
    {
      label: 'Stats',
      content: <div>Stats</div>,
    },
    {
      label: 'Moves',
      content: <div>Moves</div>,
    },
    {
      label: 'Cries',
      content: <div>Cries</div>,
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !pokemon) {
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
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.description}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        {tabs.map((tab) => (
          <span
            key={tab.label}
            style={{
              color: selectedTab === tab.label ? 'blue' : 'black',
              cursor: 'pointer',
            }}
            onClick={() => {
              setSelectedTab(tab.label);
              setSearchParams({ tab: tab.label }, { replace: true });
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>
      {tabs.find((tab) => tab.label === selectedTab)?.content}
    </div>
  );
};

export default PokemonDetail;
