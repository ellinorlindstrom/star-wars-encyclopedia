import React, { useState } from 'react';
import { SpeciesDetails } from '../types/Species.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

const Species: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [species, setSpecies] = useState<SpeciesDetails[]>([]);
    const [loading, setLoading] = useState(false);

    const getSpecies = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/species/?search=${search}`);
            const data = response.data;
            setSpecies(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Species</h1>
            <SearchForm onSubmit={getSpecies} placeholder='Search for a species' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {species.length > 0 && (
                <ul>
                    {species.map((species, index) => (
                        <li key={index}>{species.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Species