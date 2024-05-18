import React, { useState } from 'react';
import { Starship } from '../types/Starships.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

const Starships: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(false);

    const getStarships = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/starships/?search=${search}`);
            const data = response.data;
            setStarships(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Starships</h1>
            <SearchForm onSubmit={getStarships} placeholder='Search for a starship' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {starships.length > 0 && (
                <ul>
                    {starships.map((starship, index) => (
                        <li key={index}>{starship.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Starships