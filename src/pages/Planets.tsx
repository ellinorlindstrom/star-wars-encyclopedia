import React, { useState } from 'react';
import { Planet } from '../types/Planets.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

const Planets: React.FC = () => {
  const [error, setError] = useState<string | false>(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  const getPlanets = async (search: string) => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(`https://swapi.dev/api/planets/?search=${search}`);
      const data = response.data;
      setPlanets(data.results);
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <h1>Planets</h1>
    <SearchForm onSubmit={getPlanets} placeholder='Search for a planet' />
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {planets.length > 0 && (
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>{planet.name}</li>
        ))}
      </ul>
    )}

    </div>
  )
}

export default Planets