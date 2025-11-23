import { useEffect, useState } from 'react';

export function useGetPokemonList() {
  const [data, setData] = useState<{ name: string; url: string }[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function callApi() {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const result = await response.json();
      setData(result.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    callApi();
  }, []);

  return { data, isError, isLoading };
}
